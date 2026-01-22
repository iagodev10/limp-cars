import React from "react";
import { PiHandTapFill } from "react-icons/pi";
import { FaCheck, FaTruck } from "react-icons/fa";

import {
  Section,
  Container,
  TopGrid,
  BottomGrid,
  HeroCard,
  Tag,
  HeroTitle,
  HeroSubtitle,
  StepsCard,
  StepsTitle,
  StepsList,
  StepItem,
  StepBullet,
  StepTextTitle,
  StepTextSubtitle,
  BenefitsCard,
  BenefitsTitle,
  BenefitsList,
  BenefitItem,
  BenefitIcon,
  BenefitLabel,
  BenefitDescription,
  CtaCard,
  CtaText,
  CtaButton,
} from "./style";

import car from "../../assets/images/banner4.png";

export default function LevaTrazSection() {
  return (
    <Section>
      <Container>
        <TopGrid>
          <HeroCard image={car}>
            <Tag>
              <FaTruck size={14} style={{ marginRight: 6 }} />
              <span>Exclusive Experience</span>
            </Tag>

            <HeroTitle>
              Serviço leva e traz:
              <br />
              <span>Conforto absoluto</span>
            </HeroTitle>

            <HeroSubtitle>
              Já imaginou deixar seu carro impecável sem precisar sair de casa
              ou do trabalho? Buscamos, cuidamos e devolvemos com excelência.
            </HeroSubtitle>
          </HeroCard>

          <StepsCard>
            <StepsTitle>Como funciona</StepsTitle>

            <StepsList>
              <StepItem>
                <StepBullet>1</StepBullet>
                <StepTextTitle>Agende</StepTextTitle>
                <StepTextSubtitle>
                  Informe o endereço e horário ideal.
                </StepTextSubtitle>
              </StepItem>

              <StepItem>
                <StepBullet>2</StepBullet>
                <StepTextTitle>Coleta</StepTextTitle>
                <StepTextSubtitle>
                  Buscamos seu veículo com segurança.
                </StepTextSubtitle>
              </StepItem>

              <StepItem>
                <StepBullet>3</StepBullet>
                <StepTextTitle>Entrega</StepTextTitle>
                <StepTextSubtitle>
                  Devolvemos no horário combinado.
                </StepTextSubtitle>
              </StepItem>
            </StepsList>
          </StepsCard>
        </TopGrid>

        <BottomGrid>
          <BenefitsCard>
            <BenefitsTitle>Benefícios para você</BenefitsTitle>

            <BenefitsList>
              <BenefitItem>
                <BenefitIcon>
                  <FaCheck size={14} color="#000000" />
                </BenefitIcon>
                <BenefitLabel>Economia de tempo</BenefitLabel>
                <BenefitDescription>
                  Ideal para sua rotina agitada.
                </BenefitDescription>
              </BenefitItem>

              <BenefitItem>
                <BenefitIcon>
                  <FaCheck size={14} color="#000000" />
                </BenefitIcon>
                <BenefitLabel>Comodidade</BenefitLabel>
                <BenefitDescription>
                  Cuidamos de tudo para você.
                </BenefitDescription>
              </BenefitItem>

              <BenefitItem>
                <BenefitIcon>
                  <FaCheck size={14} color="#000000" />
                </BenefitIcon>
                <BenefitLabel>Segurança</BenefitLabel>
                <BenefitDescription>
                  Seu carro nas mãos de profissionais.
                </BenefitDescription>
              </BenefitItem>
            </BenefitsList>
          </BenefitsCard>

          <CtaCard>
            <PiHandTapFill size={38} color="#32DA13" />
            <CtaText>Tenha mais praticidade no seu dia a dia.</CtaText>
            <CtaButton
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=5534992911990&text&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
            >
              Clique aqui e agende agora
            </CtaButton>
          </CtaCard>
        </BottomGrid>
      </Container>
    </Section>
  );
}
