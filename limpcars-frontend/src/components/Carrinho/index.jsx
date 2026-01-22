import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoClose, IoTrashOutline, IoTimeOutline, IoArrowForward } from "react-icons/io5";

import {
  Container,
  Card,
  Title,
  Icone,
  IconeBox,
  Text,
  Grande,
  Pequeno,
  CloseBtn,
  Lista,
  Item,
  ItemThumb,
  ItemThumbImg,
  ItemContent,
  ItemNome,
  ItemDuracao,
  ItemPreco,
  RemoverBtn,
  Footer,
  TempoRow,
  TempoLabel,
  TempoValor,
  TotalRow,
  TotalLabel,
  TotalValor,
  BotoesRow,
  BtnLimpar,
  BtnAgendar,
} from "./style";

function formatPrice(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatDuracao(minutos) {
  if (!minutos) return "—";
  if (minutos >= 60) return `${Math.round(minutos / 60)}h`;
  return `${minutos}m`;
}

function formatTempoTotal(minutosTotal) {
  if (!minutosTotal) return "—";
  if (minutosTotal >= 60) return `${Math.round(minutosTotal / 60)}h`;
  return `${minutosTotal}m`;
}

const Carrinho = ({
  selecionados = [],
  total = 0,
  onClose,
  onRemover,
  onLimpar,
  onAgendar,
}) => {
  const tempoTotal = selecionados.reduce((acc, s) => acc + Number(s.duracao_minutos || 0), 0);
  const qtd = selecionados.length;

  return (
    <Container
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Carrinho de serviços"
    >
      <Card onClick={(e) => e.stopPropagation()}>
        <Title>
          <Icone>
            <IconeBox>
              <RiShoppingBag3Line size={24} />
            </IconeBox>
            <Text>
              <Grande>Seus Serviços</Grande>
              <Pequeno>
                {qtd} {qtd === 1 ? "serviço selecionado" : "serviços selecionados"}
              </Pequeno>
            </Text>
          </Icone>
          <CloseBtn
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            aria-label="Fechar carrinho"
          >
            <IoClose size={24} />
          </CloseBtn>
        </Title>

        <Lista>
          {selecionados.map((s) => (
            <Item key={s.id}>
              <ItemThumb>
                {(s.imagem_url || s.imagem) ? (
                  <ItemThumbImg
                    src={s.imagem_url || s.imagem}
                    alt={s.nome}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : null}
              </ItemThumb>
              <ItemContent>
                <ItemNome>{s.nome}</ItemNome>
                <ItemDuracao>
                  <IoTimeOutline size={14} />
                  {formatDuracao(s.duracao_minutos)}
                </ItemDuracao>
                <ItemPreco>R$ {formatPrice(s.valor)}</ItemPreco>
              </ItemContent>
              <RemoverBtn
                type="button"
                onClick={() => onRemover?.(s)}
                aria-label={`Remover ${s.nome}`}
              >
                <IoTrashOutline size={20} />
              </RemoverBtn>
            </Item>
          ))}
        </Lista>

        <Footer>
          <TempoRow>
            <TempoLabel>Tempo estimado</TempoLabel>
            <TempoValor>
              <IoTimeOutline size={16} />
              {formatTempoTotal(tempoTotal)}
            </TempoValor>
          </TempoRow>
          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValor>R$ {formatPrice(total)}</TotalValor>
          </TotalRow>
          <BotoesRow>
            <BtnLimpar type="button" onClick={onLimpar}>
              Limpar
            </BtnLimpar>
            <BtnAgendar type="button" onClick={onAgendar}>
              Agendar
              <IoArrowForward size={18} />
            </BtnAgendar>
          </BotoesRow>
        </Footer>
      </Card>
    </Container>
  );
};

export default Carrinho;
