import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";
import { Container, Cards, HeaderSection, Tag, Title, Subtitle } from "./style";

import ServicoCard from "../../components/ServicoCard";
import ButtonCart from "../../components/ButtonCart";
import Carrinho from "../../components/Carrinho";
import api from "../../../services/api";

const Servicos = () => {
  const navigate = useNavigate();
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    api.get("/servicos")
      .then((res) => setServicos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [selecionados, setSelecionados] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const total = selecionados.reduce((acc, s) => acc + Number(s.valor || 0), 0);

  const toggleServico = (servico) => {
    setSelecionados((prev) => {
      const existe = prev.find((s) => s.id === servico.id);

      if (existe) {
        return prev.filter((s) => s.id !== servico.id);
      }

      return [...prev, servico];
    });
  };

  const limparCarrinho = () => {
    setSelecionados([]);
    setOpenCart(false);
  };

  const agendar = () => {
    navigate("/agendar", {
      state: {
        selecionados,
        total
      }
    });
  };

  return (
    <>
      <Container>
        <HeaderSection>
          <Tag>
            <HiSparkles />
            Serviços Premium
          </Tag>
          <Title>
            Escolha seus <span style={{ color: "#00e0ff" }}>serviços</span>
          </Title>
          <Subtitle>
            Monte seu pacote personalizado selecionando os serviços que seu
            veículo precisa. Quanto mais serviços, melhor o resultado.
          </Subtitle>
        </HeaderSection>
        <Cards>
          {servicos.map((servico) => (
            <ServicoCard
              key={servico.id}
              nome={servico.nome}
              descricao={servico.descricao}
              valor={servico.valor}
              imagem={servico.imagem}
              imagem_url={servico.imagem_url}
              duracao_minutos={servico.duracao_minutos}
              isSelected={selecionados.some((s) => s.id === servico.id)}
              onToggle={() => toggleServico(servico)}
            />
          ))}
        </Cards>
        {selecionados.length > 0 && (
          <ButtonCart
            total={total}
            quantidade={selecionados.length}
            onClick={() => setOpenCart(true)}
          />
        )}
      </Container>
      {openCart && (
        <Carrinho
          selecionados={selecionados}
          total={total}
          onClose={() => setOpenCart(false)}
          onRemover={toggleServico}
          onLimpar={limparCarrinho}
          onAgendar={agendar}
        />
      )}
    </>
  );
};

export default Servicos;
