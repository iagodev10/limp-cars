import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 6%;
  background: linear-gradient(135deg, #050505 0%, #0a0a0a 50%, #050505 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 4%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      rgba(0, 224, 255, 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Subtitle = styled.span`
  font-size: 12px;
  letter-spacing: 3px;
  color: #00e0ff;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00e0ff, transparent);
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  margin: 20px 0 24px;
  font-weight: 300;
  font-family: 'Inter Tight', sans-serif;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Texto = styled.p`
  font-family: 'Inter Tight', sans-serif;
  font-size: 16px;
  opacity: 0.85;
  max-width: 600px;
  line-height: 1.8;
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  gap: 60px;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const InfoCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 224, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(0, 224, 255, 0.1);
  }
`;

export const ServiceButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 40px;
  background: linear-gradient(135deg, #00e0ff 0%, #00b8d4 100%);
  color: #050505;
  text-decoration: none;
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 99px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 224, 255, 0.4);
    background: linear-gradient(135deg, #00c4e0 0%, #00a8c4 100%);
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(0, 224, 255, 0.15) 0%, rgba(0, 224, 255, 0.05) 100%);
  border: 1px solid rgba(0, 224, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00e0ff;
  flex-shrink: 0;
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  ${InfoItem}:hover & {
    background: linear-gradient(135deg, rgba(0, 224, 255, 0.25) 0%, rgba(0, 224, 255, 0.15) 100%);
    border-color: rgba(0, 224, 255, 0.4);
    transform: scale(1.05);
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const InfoTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  font-family: 'Inter Tight', sans-serif;
`;

export const InfoDescription = styled.a`
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-family: 'Inter Tight', sans-serif;

  &:hover {
    color: #00e0ff;
  }
`;

export const Mapa = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 350px;
    border-radius: 16px;
  }

  &:hover {
    border-color: rgba(0, 224, 255, 0.3);
    box-shadow: 0 15px 50px rgba(0, 224, 255, 0.2);
    transform: translateY(-2px);
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(20%) brightness(0.9);
    transition: filter 0.3s ease;
  }

  &:hover iframe {
    filter: grayscale(0%) brightness(1);
  }
`;
