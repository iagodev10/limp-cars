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
      circle at 80% 20%,
      rgba(0, 224, 255, 0.03) 0%,
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
  font-family: 'Inter Tight', sans-serif;

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

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(0, 224, 255, 0.2);
  }
`;



export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`;
