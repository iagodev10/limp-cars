import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Car from "../../assets/images/banner3.png";
import EliteMatrix from "../../components/EliteMatrix";
import LevaTrazSection from "../../components/LevaTrazSection";
import Sobre from "../../components/Sobre";
import Galeria from "../../components/Galeria";
import GoogleReviews from "../../components/GoogleReviews";
import Contato from "../../components/Contato";

import { Inicio, Container, Imagem, Conteudo, Subtitle, HeroTitle, HeroDescription, CTAWrapper, CTAButton, CTAButtonServicos } from "./style";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100); // Small delay to ensure rendering
            }
        }
    }, [location]);

    return (
        <>
            <Inicio id="home">
                <Imagem src={Car} alt="" />
                <Container>

                    <Conteudo>
                        <Subtitle>Estética Automotiva Premium</Subtitle>
                        <HeroTitle>Transforme seu veículo em uma obra de arte</HeroTitle>
                        <HeroDescription>
                            Cuidamos do seu carro com produtos de alta tecnologia e atenção aos detalhes.
                            Seu veículo merece o melhor tratamento.
                        </HeroDescription>
                        <CTAWrapper>
                            
                            <CTAButtonServicos as={Link} to="/servicos">Ver Serviços</CTAButtonServicos>
                        </CTAWrapper>
                    </Conteudo>
                </Container>
            </Inicio>
            <EliteMatrix />
            <LevaTrazSection />
            <Sobre />
            <Galeria />
            <GoogleReviews />
            <Contato />
        </>
    );
};

export default Home;
