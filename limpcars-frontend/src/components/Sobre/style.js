import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 6%;
  background-color: #050505;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 4%;
  }
`;

export const Subtitle = styled.span`
  font-size: 12px;
  letter-spacing: 2px;
  color: #32DA13;
  align-self: flex-start; /* Keep text alignment */
  width: 100%;
  max-width: 1200px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 10px 0 40px;
  align-self: flex-start; /* Keep text alignment */
  width: 100%;
  max-width: 1200px;
  font-weight: 400; /* Matching reference lightness */
  font-family: 'Inter Tight', sans-serif;
  color: #fff;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  max-width: 1400px;
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const Imagem = styled.img`
  width: 100%;
  max-width: 90%;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  object-fit: cover;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 20px;
  border-radius: 30px;
  background-color: rgba(10, 10, 10, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #e5e7eb;
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 1400px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const VideoCard = styled.div`
  border-radius: 30px;
  overflow: hidden;
  background-color: rgba(10, 10, 10, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Video = styled.video`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
`;

