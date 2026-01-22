import React, { useRef, useEffect } from "react";

import {
  Subtitle,
  Title,
  Section,
  Container,
  Imagem,
  Conteudo,
  Description,
  VideosGrid,
  VideoCard,
  Video,
} from "./style";

import car from "../../assets/images/sobre.png";
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";

const Sobre = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  useEffect(() => {
    // Garantir que os vídeos iniciem automaticamente
    const playVideos = async () => {
      const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
      
      for (const video of videos) {
        if (video) {
          try {
            video.muted = true;
            await video.play();
          } catch (error) {
            // Se falhar, tenta novamente após um pequeno delay
            setTimeout(async () => {
              try {
                await video.play();
              } catch (e) {
                console.log("Autoplay bloqueado pelo navegador");
              }
            }, 100);
          }
        }
      }
    };

    playVideos();
  }, []);

  return (
    <>
      <Section id="sobre">
        <Subtitle>DNA LIMPCARS</Subtitle>
        <Title>Estética Automotiva Premium</Title>

        <Container>
          <Imagem src={car} alt="Sobre a Limpcars" />

          <Conteudo>
            <Subtitle>DNA LIMPCARS</Subtitle>
            <Title style={{marginBottom: "8px"}}>Paixão que Brilha em cada detalhe</Title>
            <Description>
              A Limpcars é uma empresa especializada em estética automotiva
              premium, com foco na satisfação do cliente. Nossa missão é
              proporcionar um serviço de alta qualidade, com produtos de alta
              tecnologia e um atendimento personalizado.
            </Description>
          </Conteudo>
        </Container>
        <VideosGrid>
          <VideoCard>
            <Video 
              ref={video1Ref}
              src={video1} 
              controls 
              loop 
              muted 
              autoPlay 
              playsInline 
            />
          </VideoCard>
          <VideoCard>
            <Video 
              ref={video2Ref}
              src={video2} 
              controls 
              loop 
              muted 
              autoPlay 
              playsInline 
            />
          </VideoCard>
          <VideoCard>
            <Video 
              ref={video3Ref}
              src={video3} 
              controls 
              loop 
              muted 
              autoPlay 
              playsInline 
            />
          </VideoCard>
        </VideosGrid>
      </Section>
    </>
  );
};

export default Sobre;
