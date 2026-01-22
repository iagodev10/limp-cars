import React from "react";
import { FaStar, FaGoogle, FaExternalLinkAlt } from "react-icons/fa";
import { 
  Section, 
  Container, 
  Header, 
  Subtitle, 
  Title, 
  MarqueeContainer,
  MarqueeTrack,
  ReviewCard, 
  UserInfo, 
  Avatar, 
  TextContent, 
  Name, 
  Date, 
  Stars, 
  Comment,
  GoogleLogo,
  ViewAllButton
} from "./style";

const reviews = [
  {
    id: 1,
    name: "Carlos Silva",
    initial: "C",
    date: "há 2 dias",
    rating: 5,
    text: "Serviço impecável! Meu carro ficou novo de novo. O atendimento é nota 10 e o cuidado com os detalhes impressiona. Recomendo demais!",
  },
  {
    id: 2,
    name: "Ana Souza",
    initial: "A",
    date: "há 1 semana",
    rating: 5,
    text: "Amei o serviço leva e traz, muito prático para minha rotina. A limpeza interna ficou perfeita, tiraram manchas que eu achava impossíveis.",
  },
  {
    id: 3,
    name: "Ricardo Oliveira",
    initial: "R",
    date: "há 3 semanas",
    rating: 5,
    text: "Profissionais de alta qualidade. Fiz a vitrificação de pintura e o brilho é surreal. Vale cada centavo pelo resultado entregue.",
  },
  {
    id: 4,
    name: "Juliana Mendes",
    initial: "J",
    date: "há 1 mês",
    rating: 5,
    text: "Melhor estética automotiva da região. Preço justo e resultado incrível. O carro saiu com cheiro de novo e brilhando muito.",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    initial: "F",
    date: "há 1 mês",
    rating: 5,
    text: "Excelente atendimento, pessoal muito educado e prestativo. O serviço ficou pronto antes do prazo combinado.",
  },
  {
    id: 6,
    name: "Roberto Costa",
    initial: "R",
    date: "há 2 meses",
    rating: 5,
    text: "Polimento técnico ficou show! Removeu todos os microrriscos que me incomodavam. O carro parece zero quilômetro.",
  },
  {
    id: 7,
    name: "Mariana Dias",
    initial: "M",
    date: "há 2 meses",
    rating: 5,
    text: "A higienização profunda salvou meu estofado claro. Estava com receio de não sair, mas ficou perfeito. Super recomendo!",
  },
  {
    id: 8,
    name: "Lucas Pereira",
    initial: "L",
    date: "há 3 meses",
    rating: 5,
    text: "Recomendo de olhos fechados. Já levei dois carros e o padrão de qualidade é sempre o mesmo. Confiança total.",
  },
  {
    id: 9,
    name: "Beatriz Santos",
    initial: "B",
    date: "há 3 meses",
    rating: 5,
    text: "Pontuais e caprichosos. O detalhamento no motor ficou incrível, nem parece o mesmo carro. Virei cliente fiel.",
  }
];

export default function GoogleReviews() {
  return (
    <Section id="depoimentos">
      <Container>
        <Header>
          <Subtitle>O QUE DIZEM NOSSOS CLIENTES</Subtitle>
          <Title>Avaliações <span>5 Estrelas</span> no Google</Title>
        </Header>

        <MarqueeContainer>
          <MarqueeTrack>
            {/* Render reviews twice to create seamless loop effect */}
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`}>
                <UserInfo>
                  <Avatar>{review.initial}</Avatar>
                  <TextContent>
                    <Name>{review.name}</Name>
                    <Date>{review.date}</Date>
                  </TextContent>
                </UserInfo>

                <Stars>
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </Stars>

                <Comment>"{review.text}"</Comment>

                <GoogleLogo>
                  <FaGoogle size={14} color="#fff" />
                  <span>Postado no Google</span>
                </GoogleLogo>
              </ReviewCard>
            ))}
          </MarqueeTrack>
        </MarqueeContainer>

        <div style={{ alignSelf: 'center' }}>
          <ViewAllButton href="https://www.google.com/maps/place/Limp+Car+%7C+Est%C3%A9tica+Automotiva/@-18.9124159,-48.3241974,17z/data=!4m25!1m15!4m14!1m6!1m2!1s0x94a4455e47bd1fbf:0xa09f10c389634c2b!2sLimp+Car+%7C+Est%C3%A9tica+Automotiva+-+Avenida+Jos%C3%A9+Fonseca+e+S%C3%ADlva+-+Jardim+Patricia,+Uberl%C3%A2ndia+-+State+of+Minas+Gerais!2m2!1d-48.3241182!2d-18.912696!1m6!1m2!1s0x94a4455e47bd1fbf:0xa09f10c389634c2b!2sAv.+Jos%C3%A9+Fonseca+e+S%C3%ADlva,+1179+-+Jardim+Patricia,+Uberl%C3%A2ndia+-+MG,+38414-097!2m2!1d-48.3241182!2d-18.912696!3m8!1s0x94a4455e47bd1fbf:0xa09f10c389634c2b!8m2!3d-18.912696!4d-48.3241182!9m1!1b1!10e5!16s%2Fg%2F11hzqh9d68?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer">
            Ver todas as avaliações
            <FaExternalLinkAlt size={12} />
          </ViewAllButton>
        </div>

      </Container>
    </Section>
  );
}
