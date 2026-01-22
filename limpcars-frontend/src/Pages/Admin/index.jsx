import React, { useEffect, useState, useMemo } from "react";
import {
  PageWrapper,
  Header,
  Title,
  LogoutButton,
  List,
  Card,
  CardHeader,
  ClientInfo,
  CardBody,
  Name,
  InfoRow,
  InfoItem,
  InfoGrid,
  InfoCard,
  InfoLabel,
  InfoValue,
  TotalText,
  Actions,
  IconButton,
  EmptyState,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  Section,
  SectionTitle,
  DetailRow,
  DetailItem,
  DetailLabel,
  DetailValue,
  ObservacoesBox,
  ObservacoesPreview,
  ServicosList,
  ServicoItem,
  ServicoNome,
  ServicoValor,
  SearchContainer,
  SearchInputWrapper,
  SearchIconWrapper,
  SearchInput,
} from "./style";

import { FiPhone, FiEye, FiTrash2, FiCalendar, FiClock, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { listarAgendamentos, deletarAgendamento } from "../../../services/agendamentos";

const formatCurrency = (valor) =>
  `R$ ${Number(valor || 0).toFixed(2).replace(".", ",")}`;

const Admin = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const { data } = await listarAgendamentos();
        setAgendamentos(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Erro ao buscar agendamentos", e);
      } finally {
        setLoading(false);
      }
    };

    fetchAgendamentos();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAutenticado");
    navigate("/admin/login");
  };

  const openDetails = (agendamento) => {
    setSelected(agendamento);
  };

  const closeDetails = () => {
    setSelected(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir este agendamento?")) return;
    try {
      await deletarAgendamento(id);
      setAgendamentos((prev) => prev.filter((a) => a.id !== id));
    } catch (e) {
      console.error("Erro ao excluir agendamento", e);
    }
  };

  const computeTotal = (agendamento) => {
    const servicos = agendamento.servicos || [];
    return servicos.reduce(
      (acc, s) => acc + Number(s.valor_cobrado || s.valor || 0),
      0
    );
  };

  const renderDate = (dataStr) => {
    if (!dataStr) return "--";
    try {
      const d = new Date(dataStr);
      return format(d, "dd/MM/yyyy", { locale: ptBR });
    } catch {
      return dataStr;
    }
  };

  const renderDateLong = (dataStr) => {
    if (!dataStr) return "--";
    try {
      const d = new Date(dataStr);
      return format(d, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR });
    } catch {
      return dataStr;
    }
  };

  const sortedAgendamentos = useMemo(() => {
    let list = [...agendamentos];

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      list = list.filter((ag) => {
        const nome = (
          ag.nome_cliente ||
          ag.nome ||
          ag.cliente_nome ||
          ""
        ).toLowerCase();
        
        const servicos = (ag.servicos || []).map((s) =>
          (s.nome || s.servico_nome || "").toLowerCase()
        );

        const matchNome = nome.includes(lowerTerm);
        const matchServico = servicos.some((s) => s.includes(lowerTerm));

        return matchNome || matchServico;
      });
    }

    return list.sort((a, b) => {
      const da = new Date(a.data_atendimento || a.criado_em || 0).getTime();
      const db = new Date(b.data_atendimento || b.criado_em || 0).getTime();
      return da - db;
    });
  }, [agendamentos, searchTerm]);

  return (
    <PageWrapper>
      <Header>
        <Title>Agendamentos</Title>
        <LogoutButton onClick={handleLogout}>Sair do admin</LogoutButton>
      </Header>

      <SearchContainer>
        <SearchInputWrapper>
          <SearchIconWrapper>
            <FiSearch size={20} />
          </SearchIconWrapper>
          <SearchInput
            type="text"
            placeholder="Pesquisar por nome ou serviço..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInputWrapper>
      </SearchContainer>

      {loading ? (
        <EmptyState>Carregando agendamentos...</EmptyState>
      ) : sortedAgendamentos.length === 0 ? (
        <EmptyState>
          {searchTerm
            ? "Nenhum agendamento encontrado para sua busca."
            : "Nenhum agendamento encontrado."}
        </EmptyState>
      ) : (
        <List>
          {sortedAgendamentos.map((ag) => {
            const total = computeTotal(ag);
            const qtdServicos = (ag.servicos || []).length;
            const nome =
              ag.nome_cliente || ag.nome || ag.cliente_nome || "Sem nome";
            const telefone = ag.telefone || ag.telefone_cliente || "--";

            return (
              <Card key={ag.id}>
                <CardHeader>
                  <ClientInfo>
                    <Name>{nome}</Name>
                    <InfoRow>
                      <InfoItem>
                        <FiPhone size={16} />
                        <span>{telefone}</span>
                      </InfoItem>
                    </InfoRow>
                  </ClientInfo>
                  <Actions>
                    <IconButton onClick={() => openDetails(ag)}>
                      <FiEye size={16} />
                    </IconButton>
                    <IconButton $danger onClick={() => handleDelete(ag.id)}>
                      <FiTrash2 size={16} />
                    </IconButton>
                  </Actions>
                </CardHeader>

                <CardBody>
                  <InfoGrid>
                    <InfoCard>
                      <InfoLabel>
                        <FiCalendar size={14} />
                        Data
                      </InfoLabel>
                      <InfoValue>
                        {renderDate(ag.data_atendimento || ag.data)}
                      </InfoValue>
                    </InfoCard>

                    <InfoCard>
                      <InfoLabel>
                        <FiClock size={14} />
                        Hora
                      </InfoLabel>
                      <InfoValue>
                        {ag.hora_atendimento || ag.horario || "--"}
                      </InfoValue>
                    </InfoCard>

                    <InfoCard $highlight>
                      <InfoLabel>Preço Total</InfoLabel>
                      <TotalText>{formatCurrency(total)}</TotalText>
                    </InfoCard>

                    <InfoCard>
                      <InfoLabel>Serviços</InfoLabel>
                      <InfoValue>
                        {qtdServicos} serviço{qtdServicos !== 1 ? "s" : ""}
                      </InfoValue>
                    </InfoCard>
                  </InfoGrid>

                  {ag.observacoes && (
                    <ObservacoesPreview>
                      {ag.observacoes.length > 80
                        ? `${ag.observacoes.substring(0, 80)}...`
                        : ag.observacoes}
                    </ObservacoesPreview>
                  )}
                </CardBody>
              </Card>
            );
          })}
        </List>
      )}

      {selected && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Detalhes do Agendamento</ModalTitle>
              <CloseButton onClick={closeDetails}>×</CloseButton>
            </ModalHeader>

            <ModalBody>
              <Section>
                <SectionTitle>Informações do Cliente</SectionTitle>
                <DetailRow>
                  <DetailItem>
                    <DetailLabel>Nome</DetailLabel>
                    <DetailValue>
                      {selected.nome_cliente ||
                        selected.nome ||
                        selected.cliente_nome ||
                        "Sem nome"}
                    </DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Telefone</DetailLabel>
                    <DetailValue>
                      {selected.telefone || selected.telefone_cliente || "--"}
                    </DetailValue>
                  </DetailItem>
                </DetailRow>
              </Section>

              <Section>
                <SectionTitle>Agendamento</SectionTitle>
                <DetailRow>
                  <DetailItem>
                    <DetailLabel>Data</DetailLabel>
                    <DetailValue>
                      {renderDateLong(
                        selected.data_atendimento || selected.data
                      )}
                    </DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Horário</DetailLabel>
                    <DetailValue>
                      {selected.hora_atendimento || selected.horario || "--"}
                    </DetailValue>
                  </DetailItem>
                </DetailRow>
              </Section>

              <Section>
                <SectionTitle>Observações</SectionTitle>
                <ObservacoesBox>
                  {selected.observacoes || "Sem observações."}
                </ObservacoesBox>
              </Section>

              <Section>
                <SectionTitle>Serviços</SectionTitle>
                <ServicosList>
                  {(selected.servicos || []).map((s, idx) => (
                    <ServicoItem key={idx}>
                      <ServicoNome>{s.nome || s.servico_nome}</ServicoNome>
                      <ServicoValor>
                        {formatCurrency(s.valor_cobrado || s.valor)}
                      </ServicoValor>
                    </ServicoItem>
                  ))}
                </ServicosList>
              </Section>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export default Admin;
