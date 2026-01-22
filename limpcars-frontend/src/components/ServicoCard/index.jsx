import React from "react";
import { IoIosAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import {
  Card,
  ImageWrapper,
  CardImg,
  DurationBadge,
  Infos,
  Title,
  Description,
  Price,
  Button,
} from "./style";
import api from "../../../services/api";
import fallbackImg from "../../assets/images/limpcars-logo.png";

function formatDuracao(minutos) {
  if (!minutos) return "—";
  if (minutos >= 60) return `${Math.round(minutos / 60)}h`;
  return `${minutos}m`;
}

function formatPrice(valor) {
  if (valor == null) return "—";
  return Number(valor).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const ServicoCard = ({
  nome,
  descricao,
  valor,
  imagem,
  imagem_url,
  duracao_minutos,
  isSelected,
  onToggle,
}) => {
  const apiBaseUrl = api?.defaults?.baseURL || "";
  const apiOrigin = (() => {
    try {
      return new URL(apiBaseUrl).origin;
    } catch {
      return "";
    }
  })();

  // Sanitiza a URL da imagem para evitar protocolos perigosos (ex.: javascript:)
  const getSafeImageUrl = (url) => {
    if (!url || typeof url !== "string") return null;

    const trimmed = url.trim();
    if (!trimmed) return null;

    // URLs absolutas: permite apenas http/https e data:
    if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)) {
      if (
        trimmed.startsWith("http://") ||
        trimmed.startsWith("https://") ||
        trimmed.startsWith("data:")
      ) {
        return trimmed;
      }
      return null;
    }

    // Caminho relativo vindo do backend (ex.: /uploads/x.png)
    if (apiOrigin) {
      const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
      return `${apiOrigin}${path}`;
    }

    return null;
  };

  const src = getSafeImageUrl(imagem_url) || getSafeImageUrl(imagem) || fallbackImg;

  return (
    <Card>
      <ImageWrapper>
        <CardImg
          src={src}
          alt={nome}
          onError={(e) => {
            e.currentTarget.src = fallbackImg;
            e.currentTarget.style.background = "#0a0a0c";
            e.currentTarget.style.objectFit = "contain";
          }}
        />
        <DurationBadge>{formatDuracao(duracao_minutos)}</DurationBadge>
      </ImageWrapper>

      <Infos>
        <Title>{nome}</Title>
        <Description>{descricao || ""}</Description>
        <Price>R$ {formatPrice(valor)}</Price>

        <Button
          type="button"
          $added={isSelected}
          onClick={onToggle}
        >
          {isSelected ? (
            <>
              <FaCheck size={16} /> Adicionado
            </>
          ) : (
            <>
              <IoIosAdd size={20} /> Adicionar
            </>
          )}
        </Button>
      </Infos>
    </Card>
  );
};


export default ServicoCard;
