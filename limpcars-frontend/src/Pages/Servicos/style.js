import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 24px;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 480px) {
        padding: 16px;
    }
`;

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 8px;
    width: 100%;
    max-width: 720px;
`;

export const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid #00e0ff;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 16px;
    font-family: 'Inter Tight', sans-serif;

    svg {
        color: #00e0ff;
        font-size: 1.1rem;
        flex-shrink: 0;
    }
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    width: 100%;
    max-width: 1400px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const Title = styled.h2`
    font-size: 3rem;
    margin: 0 0 8px 0;
    line-height: 1.2;
    font-family: 'Inter Tight', sans-serif;
    color: #ffffff;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.75rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
    font-family: 'Inter Tight', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;