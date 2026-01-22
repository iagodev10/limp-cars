import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #050505;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 60px 6% 40px;
  position: relative;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 224, 255, 0.3),
      transparent
    );
  }
`;


export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
`;


export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
    object-fit: contain;
    opacity: 0.9;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #00e0ff;
    background: rgba(0, 224, 255, 0.1);
    border-color: rgba(0, 224, 255, 0.3);
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 24px;
  }
`;

export const Link = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-family: 'Inter Tight', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover {
    color: #00e0ff;
  }
`;

export const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Inter Tight', sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.3px;
`;
