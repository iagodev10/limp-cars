import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 6% 100px;
  background:
    radial-gradient(
      circle at top right,
      rgba(57, 255, 20, 0.08) 0%,
      rgba(57, 255, 20, 0.04) 30%,
      rgba(57, 255, 20, 0.01) 45%,
      transparent 60%
    ),
    linear-gradient(
      135deg,
      #14161A 0%,
      #0A0B0D 60%,
      #050505 100%
    );
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 4% 80px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.4fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCard = styled.div`
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.4)
    ),
    url("${props => props.image}") center/cover no-repeat;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
`;

export const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background-color: rgba(16, 185, 129, 0.18);
  margin-bottom: 18px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #32DA13;
`;

export const HeroTitle = styled.h2`
  font-family: "Inter Tight", sans-serif;
  font-size: 32px;
  line-height: 1.1;
  margin-bottom: 12px;

  span {
    color: #32DA13;
  }

  @media (max-width: 900px) {
    font-size: 26px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 14px;
  max-width: 520px;
  opacity: 0.82;
`;

export const StepsCard = styled.div`
  border-radius: 28px;
  padding: 32px;
  background-color: rgba(10, 10, 10, 0.8); /* Dark background */
    border: 1px solid rgba(255, 255, 255, 0.08); /* Subtle border */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  color: #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StepsTitle = styled.h3`
  font-family: "Inter Tight", sans-serif;
  font-size: 16px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #32DA13;
`;

export const StepsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StepItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 14px;
  align-items: flex-start;
`;

export const StepBullet = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 999px;
  border: 1px solid #32DA13;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #32DA13;
`;

export const StepTextTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #32DA13;
`;

export const StepTextSubtitle = styled.span`
  grid-column: 2;
  font-size: 13px;
  opacity: 0.85;
`;

export const BenefitsCard = styled.div`
  border-radius: 28px;
  padding: 28px 30px;
  background-color: rgba(10, 10, 10, 0.8); /* Dark background */
    border: 1px solid rgba(255, 255, 255, 0.08); /* Subtle border */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  color: #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const BenefitsTitle = styled.h3`
  font-size: 16px;
  font-family: "Inter Tight", sans-serif;
  color: #32DA13;
`;

export const BenefitsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BenefitItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 14px;
  align-items: flex-start;
  font-size: 18px;
`;

export const BenefitIcon = styled.span`
  width: 25px;
  height: 25px;
  min-width: 25px;
  border-radius: 999px;
  background-color: #32DA13;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const BenefitLabel = styled.span`
  font-weight: 600;
`;

export const BenefitDescription = styled.span`
  grid-column: 2;
  opacity: 0.8;
`;

export const CtaCard = styled.div`
  border-radius: 28px;
  padding: 28px 32px;
  background-color: rgba(10, 10, 10, 0.8); /* Dark background */
    border: 1px solid rgba(255, 255, 255, 0.08); /* Subtle border */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  color: #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;

  @media (max-width: 900px) {
    background-color: rgba(10, 10, 10, 0.8); /* Dark background */
    border: 1px solid rgba(255, 255, 255, 0.08); /* Subtle border */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;



export const CtaText = styled.div`
  font-size: 18px;
  font-family: "Inter Tight", sans-serif;
`;

export const CtaButton = styled.button`
  margin-top: 4px;
  padding: 10px 26px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background-color: #f9fafb;
  color: #020617;
`;

