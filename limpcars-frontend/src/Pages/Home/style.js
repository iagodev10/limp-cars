import styled from "styled-components";

export const Inicio = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;


export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
`;

export const Conteudo = styled.div`
    position: relative;
    z-index: 3;
    text-align: center;
    color: #fff;
    width: 100%;
    max-width: 900px;
    padding: 0 20px;
    box-sizing: border-box;
    background: transparent;
    
    @media (max-width: 768px) {
        padding: 0 15px;
    }
`;

export const Subtitle = styled.span`
    font-size: 14px;
    letter-spacing: 4px;
    color: #00e0ff;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    margin-bottom: 20px;
    font-family: 'Inter Tight', sans-serif;

    @media (max-width: 768px) {
        font-size: 12px;
        letter-spacing: 3px;
        margin-bottom: 16px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
        letter-spacing: 2px;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 64px;
    font-weight: 300;
    margin: 0 0 24px 0;
    line-height: 1.2;
    font-family: 'Inter Tight', sans-serif;
    color: #ffffff;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
        font-size: 42px;
    }

    @media (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroDescription = styled.p`
    font-size: 18px;
    line-height: 1.8;
    opacity: 0.95;
    margin: 0 0 40px 0;
    font-family: 'Inter Tight', sans-serif;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.7), 0 1px 5px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 30px;
        padding: 0 10px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 24px;
    }
`;

export const CTAWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
`;

export const CTAButton = styled.a`
    display: inline-block;
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

    @media (max-width: 768px) {
        padding: 14px 32px;
        font-size: 13px;
    }

    @media (max-width: 480px) {
        padding: 12px 28px;
        font-size: 12px;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 224, 255, 0.4);
        background: linear-gradient(135deg, #00c4e0 0%, #00a8c4 100%);
    }
`;

// export const CTAButtonServicos = styled.a`
//     display: inline-block;
//     padding: 14px 36px;
//     background: transparent;
//     color: #00e0ff;
//     text-decoration: none;
//     font-family: 'Inter Tight', sans-serif;
//     font-size: 14px;
//     font-weight: 600;
//     text-transform: uppercase;
//     letter-spacing: 1px;
//     border-radius: 99px;
//     border: 1px solid #00e0ff;
//     transition: all 0.3s ease;
//     cursor: pointer;

//     @media (max-width: 768px) {
//         padding: 12px 28px;
//         font-size: 13px;
//     }

//     @media (max-width: 480px) {
//         padding: 10px 24px;
//         font-size: 12px;
//     }

//     &:hover {
//         background: rgba(0, 224, 255, 0.15);
//         transform: translateY(-2px);
//         box-shadow: 0 6px 20px rgba(0, 224, 255, 0.25);
//     }
// `;