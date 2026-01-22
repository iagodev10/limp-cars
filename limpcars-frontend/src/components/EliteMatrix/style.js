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
  color: #00e0ff;
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
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 2fr 1fr;
  grid-template-rows: repeat(2, minmax(300px, auto));
  grid-template-areas:
    "main top top"
    "main bot1 bot2";
  gap: 20px;
  width: 100%;
  max-width: 1400px;

  /* Target children based on order in index.jsx to assign grid areas */
  & > div:nth-child(1) { grid-area: main; }
  & > div:nth-child(2) { grid-area: top; }
  & > div:nth-child(3) { grid-area: bot1; }
  & > div:nth-child(4) { grid-area: bot2; }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    grid-auto-rows: minmax(260px, auto);
    grid-template-areas:
        "main"
        "top"
        "bot1"
        "bot2";
  }
`;

export const MainCard = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${props => props.image}) center/cover no-repeat;

  border-radius: 30px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-family: 'Inter Tight', sans-serif;
    font-size: 32px;
    margin-bottom: 12px;
    font-weight: 600;
  }

  p {
    font-family: 'Inter Tight', sans-serif;
    font-size: 15px;
    opacity: 0.8;
    max-width: 420px;
    line-height: 1.5;
  }

  span {
    margin-top: 24px;
    font-size: 11px;
    letter-spacing: 2px;
    color: #00e0ff;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const ImageCard = styled.div`
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.9)
    ),
    url(${props => props.image}) center/cover no-repeat;

  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* Removed min-height so it respects grid row height */

  h4 {
    font-family: 'Inter Tight', sans-serif;
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: 600;
  }

  p {
    font-family: 'Inter Tight', sans-serif;
    font-size: 13px;
    opacity: 0.7;
    line-height: 1.4;
  }
`;

export const StatCard = styled.div`
  background-color: #00e0ff;
  color: #000;
  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    font-family: 'Inter Tight', sans-serif;
    font-size: 42px;
    font-weight: 700;
    font-style: italic;
  }

  span {
    font-family: 'Inter Tight', sans-serif;
    font-size: 11px;
    margin-top: 4px;
    letter-spacing: 0.5px;
    font-weight: 700;
    text-transform: uppercase;
    max-width: 80px;
  }
`;
