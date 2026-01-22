import React from "react";
import { Link } from "react-router-dom";

import {
  Section,
  HeaderSection,
  Subtitle,
  Title,
  Texto,
  MainContainer,
  InfoCard,
  InfoItem,
  IconWrapper,
  InfoText,
  InfoTitle,
  InfoDescription,
  Mapa,
  ServiceButton
} from "./style";

const Contato = () => {
  return (
    <>
      <Section id="contato">
        <HeaderSection>
          <Subtitle>CONTATO</Subtitle>
          <Title>Entre em Contato</Title>
          <Texto>
            Agende seu serviço ou tire suas dúvidas. Estamos prontos para atender
            você com excelência!
          </Texto>
        </HeaderSection>

        <MainContainer>
          <InfoCard>
            <InfoItem>
              <IconWrapper>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </IconWrapper>
              <InfoText>
                <InfoTitle>Telefone</InfoTitle>
                <InfoDescription href="tel:+553492911990">(34) 99291-1990</InfoDescription>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </IconWrapper>
              <InfoText>
                <InfoTitle>E-mail</InfoTitle>
                <InfoDescription href="mailto:contato@limpcars.com.br">contato@limpcars.com.br</InfoDescription>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </IconWrapper>
              <InfoText>
                <InfoTitle>Endereço</InfoTitle>
                <InfoDescription>Uberlândia - MG</InfoDescription>
              </InfoText>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                </svg>
              </IconWrapper>
              <InfoText>
                <InfoTitle>Horário</InfoTitle>
                <InfoDescription>Seg - Sáb: 8h às 18h</InfoDescription>
              </InfoText>
            </InfoItem>

            <ServiceButton as={Link} to="/servicos">
              Ver Serviços
            </ServiceButton>
          </InfoCard>

          <Mapa>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.42234677408!2d-48.32669312391013!3d-18.912690907439877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4455e47bd1fbf%3A0xa09f10c389634c2b!2sLimp%20Car%20%7C%20Est%C3%A9tica%20Automotiva!5e0!3m2!1spt-BR!2sbr!4v1768589721810!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Limp Car"
            ></iframe>
          </Mapa>
        </MainContainer>
      </Section>
    </>
  );
};

export default Contato;
