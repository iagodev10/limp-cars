import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isBefore,
  startOfToday,
  isSameMonth,
  getDay,
  isSameDay,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowForward, IoIosArrowBack, IoIosCar } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuUser, LuPhone } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { criarCliente } from "../../../services/clientes";
import { criarAgendamento } from "../../../services/agendamentos";

const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const Agendar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selecionados = [] } = location.state || {};
  const total = selecionados.reduce((acc, s) => acc + Number(s.valor || 0), 0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefoneValido, setTelefoneValido] = useState(true);
  const [modeloVeiculo, setModeloVeiculo] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState("");
  const today = startOfToday();

  const enviarWhatsapp = () => {
  const telefoneDestino = "5534992911990";
  
  // Formata os serviços com asterisco e ponto
  const listaServicos = selecionados.map(s => `*${s.nome} . *`).join(" ");

  // Formata o dia da semana em maiúsculo + data
  const diaSemana = selectedDate ? format(selectedDate, "eeee", { locale: ptBR }).toUpperCase() : "";
  const dataNumerica = selectedDate ? format(selectedDate, "dd/MM/yyyy") : "";

  const mensagem = 
    `*Nome do cliente :* ${nome}%0A` +
    `*Veículo :* ${modeloVeiculo}%0A` +
    `*Telefone :* ${telefone}%0A` +
    `*Serviços :* ${listaServicos}%0A%0A` +
    `*VALOR TOTAL :* ${total.toFixed(2).replace('.', ',')}$%0A%0A` +
    `*AGENDAMENTO PARA ${diaSemana} ${dataNumerica} às ${selectedTime}*`;

  const urlZap = `https://wa.me/${telefoneDestino}?text=${mensagem}`;
  window.open(urlZap, "_blank");
};

  const formatTelefone = (valor) => {
    const digitos = valor.replace(/\D/g, "").slice(0, 11); // máximo 11 dígitos (DD + 9 + 8)

    if (digitos.length <= 2) {
      return digitos;
    }

    if (digitos.length <= 7) {
      return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
    }

    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
  };

  const handleTelefoneChange = (e) => {
    const valorDigitado = e.target.value;
    const formatado = formatTelefone(valorDigitado);
    setTelefone(formatado);

    const apenasDigitos = formatado.replace(/\D/g, "");
    setTelefoneValido(apenasDigitos.length === 11);
  };

  const isFormValid =
    selectedDate &&
    selectedTime &&
    nome.trim() &&
    telefone.trim() &&
    telefoneValido &&
    modeloVeiculo.trim() &&
    selecionados.length > 0;

const handleConfirm = async () => {
  if (!isFormValid || salvando) return;

  try {
    setSalvando(true);
    setErro("");

    // 1) Salva no seu Banco de Dados (seu código atual)
    const clienteRes = await criarCliente({ nome, telefone });
    const clienteId = clienteRes?.data?.id;
    if (!clienteId) throw new Error("Falha ao criar o cliente.");

    const servicosPayload = selecionados.map((s) => ({
      servico_id: s.id,
      valor_cobrado: s.valor,
    }));

    const agendamentoRes = await criarAgendamento({
      cliente_id: clienteId,
      data_atendimento: selectedDate ? selectedDate.toISOString() : null,
      hora_atendimento: selectedTime,
      modelo_veiculo: modeloVeiculo.trim(),
      observacoes: observacoes.trim() || null,
      servicos: servicosPayload,
    });

    // 2) PREPARAR A MENSAGEM
    const telefoneDestino = "5534992911990";
    const listaServicos = selecionados.map(s => s.nome).join(", ");
    const dataFormatada = selectedDate ? format(selectedDate, "dd/MM/yyyy") : "";
    
    const mensagem = `*Novo Agendamento*%0A` +
                     `*Nome:* ${nome}%0A` +
                     `*Modelo do Veículo:* ${modeloVeiculo}%0A` +
                     `*Serviços:* ${listaServicos}%0A` +
                     `*Data:* ${dataFormatada} às ${selectedTime}%0A` +
                     `*Valor Total:* R$ ${total.toFixed(2).replace('.', ',')}`;

    const urlZap = `https://wa.me/${telefoneDestino}?text=${mensagem}`;

    // 3) ABRIR O WHATSAPP
    // Usamos o timeout para dar tempo do navegador processar o link antes de mudar a rota do site
    const novaJanela = window.open(urlZap, "_blank");
    
    // Se o window.open falhar (bloqueado pelo navegador), tentamos o redirecionamento direto
    if (!novaJanela || novaJanela.closed || typeof novaJanela.closed === 'undefined') {
        window.location.href = urlZap;
    }

    // 4) REDIRECIONAR NO SEU SITE (Atrasamos um pouco para garantir a abertura do Zap)
    setTimeout(() => {
      navigate("/confirmar", {
        state: {
          selecionados,
          total,
          data: selectedDate ? selectedDate.toISOString() : null,
          hora: selectedTime,
          nome,
          telefone,
          agendamentoId: agendamentoRes.data?.id,
        },
      });
    }, 500);

  } catch (e) {
    console.error("Erro ao criar agendamento", e);
    setErro("Erro ao salvar. Tente novamente.");
  } finally {
    setSalvando(false);
  }
};

  // Gerar dias do calendário
  const start = startOfWeek(startOfMonth(currentDate));
  const end = endOfWeek(endOfMonth(currentDate));
  const days = eachDayOfInterval({ start, end });

  return (
    <S.Container>
      <S.Title>
        Agendar <span style={{ color: "#00e0ff" }}>Serviços</span>
      </S.Title>
      <S.Subtitle>
        Escolha a melhor data e horário para seu atendimento.
      </S.Subtitle>

      <S.Content>
        {/* LADO ESQUERDO: CALENDÁRIO */}
        <S.LeftContainer>
          <S.CalendarWrapper>
            <S.Titulo>
              <CiCalendar fontSize={24} color="#00e0ff" />
              Selecionar a Data
            </S.Titulo>
            <S.CalendarHeader>
              <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
                <IoIosArrowBack fontSize={24} color="#00e0ff" />
              </button>
              <span>{format(currentDate, "MMMM yyyy", { locale: ptBR })}</span>
              <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
                <IoIosArrowForward fontSize={24} color="#00e0ff" />
              </button>
            </S.CalendarHeader>

            <S.Grid>
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((d) => (
                <S.DayName key={d}>{d}</S.DayName>
              ))}

              {days.map((day) => {
                const isPast = isBefore(day, today);
                const isWeekend = getDay(day) === 0 || getDay(day) === 6; // 0=Dom, 6=Sáb
                const isNotCurrentMonth = !isSameMonth(day, currentDate);
                const isSelected = selectedDate && isSameDay(day, selectedDate);

                const isDisabled = isPast || isWeekend || isNotCurrentMonth;

                return (
                  <S.Day
                    key={day.toString()}
                    $isDisabled={isDisabled}
                    $isSelected={isSelected}
                    onClick={() => !isDisabled && setSelectedDate(day)}
                  >
                    {format(day, "d")}
                  </S.Day>
                );
              })}
            </S.Grid>
          </S.CalendarWrapper>

          <S.Horario>
            <S.Titulo>
              <MdOutlineWatchLater fontSize={24} color="#00e0ff" />
              Selecionar o Horário
            </S.Titulo>
            <S.TimeGrid>
              {timeSlots.map((time) => (
                <S.TimeButton
                  key={time}
                  $isSelected={selectedTime === time}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </S.TimeButton>
              ))}
            </S.TimeGrid>
          </S.Horario>

          <S.Dados>
            <S.Titulo>
              <LuUser fontSize={24} color="#00e0ff" />
              Seus Dados
            </S.Titulo>
            <S.Form>
              <S.InputWrapper>
                <LuUser />
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </S.InputWrapper>

              <S.InputWrapper>
                <LuPhone />
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={handleTelefoneChange}
                />
              </S.InputWrapper>
              {!telefoneValido && telefone && (
                <span style={{ color: "#ff4d4f", fontSize: "0.8rem" }}>
                  Informe um telefone válido com DDD (11 dígitos).
                </span>
              )}
            </S.Form>
          </S.Dados>

          <S.Modelo>
            <S.Titulo>
              <IoIosCar fontSize={24} color="#00e0ff" />
              Modelo do Carro
            </S.Titulo>
            <S.InputWrapper>
              <IoIosCar />
              <input
                type="text"
                placeholder="Informe o modelo do seu carro"
                value={modeloVeiculo}
                onChange={(e) => setModeloVeiculo(e.target.value)}
                required
              />
            </S.InputWrapper>
            {!modeloVeiculo.trim() && (
              <span style={{ color: "#ff4d4f", fontSize: "0.8rem", marginTop: "4px", display: "block" }}>
                O modelo do veículo é obrigatório.
              </span>
            )}
          </S.Modelo>

          <S.Observacoes>
            <S.Titulo>
              <FiFileText fontSize={24} color="#00e0ff" />
              Observações
            </S.Titulo>
            <S.Textarea
              placeholder="Deixe suas observações sobre a limpeza (opcional)"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              rows={4}
            />
          </S.Observacoes>

          <S.Button
            disabled={!isFormValid || salvando}
            $isDisabled={!isFormValid || salvando}
            onClick={handleConfirm}
          >
            {salvando ? "Salvando..." : "Confirmar Agendamento"}
          </S.Button>
          {erro && (
            <p style={{ marginTop: 8, color: "#ff4d4f", fontSize: "0.85rem" }}>
              {erro}
            </p>
          )}
        </S.LeftContainer>

        {/* LADO DIREITO: CARD FIXO (STICKY) */}
        <S.Sidebar>
          <S.SidebarTitle>Resumo do Pedido</S.SidebarTitle>
          <div
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              marginBottom: "20px",
              borderBottom: "1px solid #222",
            }}
          >
            {selecionados.map((s) => (
              <S.PriceRow key={s.id}>
                <span>{s.nome}</span>
                <span>R$ {Number(s.valor).toFixed(2).replace(".", ",")}</span>
              </S.PriceRow>
            ))}
            {selecionados.length === 0 && (
              <S.PriceRow>
                <span>Nenhum serviço selecionado</span>
              </S.PriceRow>
            )}
          </div>

          <S.PriceRow>
            <span>Data selecionada:</span>
            <span>
              {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "--"}
            </span>
          </S.PriceRow>

          <S.PriceRow>
            <span>Horário:</span>
            <span>{selectedTime || "--"}</span>
          </S.PriceRow>

          <S.PriceRow style={{ marginTop: "30px" }}>
            <span style={{ fontWeight: "bold" }}>Total</span>
            <span className="total">
              R$ {Number(total).toFixed(2).replace(".", ",")}
            </span>
          </S.PriceRow>
        </S.Sidebar>
      </S.Content>
    </S.Container>
  );
};

export default Agendar;
