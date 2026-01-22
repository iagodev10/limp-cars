import React from "react";
import {
  Section,
  HeaderSection,
  Subtitle,
  Title,
  Texto,
  GalleryGrid,
  GalleryItem,
  Image,
} from "./style";

import foto1 from "../../assets/images/foto1.png";
import foto2 from "../../assets/images/foto2.png";
import foto3 from "../../assets/images/foto3.png";
import foto4 from "../../assets/images/foto4.png";
import foto5 from "../../assets/images/foto5.png";
import foto6 from "../../assets/images/foto6.png";
import foto7 from "../../assets/images/foto7.png";
import foto8 from "../../assets/images/foto8.png";

const Galeria = () => {
  const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

  return (
    <Section id="galeria">
      <HeaderSection>
        <Subtitle>GALERIA</Subtitle>
        <Title>Nossos Trabalhos</Title>
        <Texto>
          Confira alguns dos nossos trabalhos realizados com excelência e dedicação.
          Cada detalhe é tratado com cuidado especial.
        </Texto>
      </HeaderSection>

      <GalleryGrid>
        {images.map((img, index) => (
          <GalleryItem key={index}>
            <Image src={img} alt={`Trabalho realizado ${index + 1}`} />
          </GalleryItem>
        ))}
      </GalleryGrid>
    </Section>
  );
};

export default Galeria;
