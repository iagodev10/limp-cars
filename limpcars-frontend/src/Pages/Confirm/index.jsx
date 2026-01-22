import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  IconWrapper,
  Texto,
  Sub,
  Card,
  TituloCard,
  Divider,
  Row,
  Label,
  Value,
  TotalRow,
  TotalLabel,
  TotalValue,
  Button,
} from "./style";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    selecionados = [],
    total = 0,
    data = null,
    hora = null,
    nome = "",
    telefone = "",
  } = location.state || {};

  const dataFormatada = useMemo(() => {
    if (!data) return "--";
    try {
      const d = new Date(data);
      return format(d, "EEEE, d 'de' MMMM", { locale: ptBR });
    } catch {
      return "--";
    }
  }, [data]);

  const servicosQuantidade = selecionados.length;

  const handleVoltarInicio = () => {
    navigate("/");
  };

  return (
    <Container>
      <IconWrapper>
        <IoMdCheckmarkCircleOutline fontSize={46} color="#00e0ff" />
      </IconWrapper>

      <Texto>Agendamento Confirmado!</Texto>
      <Sub>
        Recebemos seu agendamento. Entraremos em contato em breve para
        confirmar os detalhes.
      </Sub>

      <Card>
        <div>
          <TituloCard>Resumo do Agendamento</TituloCard>
          <Divider />
        </div>

        <Row>
          <Label>Data</Label>
          <Value>{dataFormatada}</Value>
        </Row>

        <Row>
          <Label>Horário</Label>
          <Value>{hora || "--"}</Value>
        </Row>

        <Row>
          <Label>Serviços</Label>
          <Value>
            {servicosQuantidade > 0
              ? `${servicosQuantidade} serviço(s)`
              : "Nenhum serviço"}
          </Value>
        </Row>

        <Row>
          <Label>Nome</Label>
          <Value>{nome || "--"}</Value>
        </Row>

        <Row>
          <Label>Telefone</Label>
          <Value>{telefone || "--"}</Value>
        </Row>

        <TotalRow>
          <TotalLabel>Total</TotalLabel>
          <TotalValue>
            R$ {Number(total).toFixed(2).replace(".", ",")}
          </TotalValue>
        </TotalRow>
      </Card>

      <Button onClick={handleVoltarInicio}>Voltar ao Início</Button>
    </Container>
  );
};

export default Confirm;