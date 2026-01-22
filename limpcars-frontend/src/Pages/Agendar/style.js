import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  text-align: center;
  margin-top: 80px;
  margin-bottom: -20px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  text-align: center;
`;

// Layout Principal (Lado a Lado)
export const Content = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  max-width: 750px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Titulo = styled.h2`
  font-size: 1.2rem;
  color: #ffffff;
  text-align: left;
  margin-bottom: 20px;
  margin-top: -10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Container do Calendário (Lado Esquerdo)
export const CalendarWrapper = styled.div`
  background: #0d0d0d;
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  padding: 33px;
  width: 100%;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  color: #fff;
  
  button {
    background: none;
    border: none;
    color: #555;
    cursor: pointer;
    font-size: 1.2rem;
    &:hover { color: #00e0ff; }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const DayName = styled.div`
  color: #555;
  font-size: 0.8rem;
  text-align: center;
  padding-bottom: 15px;
`;

export const Day = styled.button`
  background: ${props => props.$isSelected ? '#00e0ff' : 'none'};
  color: ${props => {
    if (props.$isSelected) return '#000';
    if (props.$isDisabled) return '#222';
    return '#fff';
  }};
  border: none;
  font-family: 'Inter Tight', sans-serif;
  padding: 12px 0;
  border-radius: 8px;
  font-weight: bold;
  cursor: ${props => props.$isDisabled ? 'default' : 'pointer'};
  pointer-events: ${props => props.$isDisabled ? 'none' : 'auto'};
  transition: 0.2s;

  &:hover {
    background: ${props => !props.$isDisabled && !props.$isSelected ? '#1a1a1a' : ''};
    color: ${props => !props.$isDisabled && !props.$isSelected ? '#00e0ff' : ''};
  }

  @media (max-width: 480px) {
    padding: 10px 0;
    font-size: 0.9rem;
  }
`;

// Card Lateral (Lado Direito)
export const Sidebar = styled.aside`
  width: 400px;
  font-family: 'Inter Tight', sans-serif;
  background: #0d0d0d;
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  padding: 25px;
  position: sticky; // Torna o card fixo ao rolar
  top: 80px;

  @media (max-width: 1024px) {
    width: 100%;
    position: static;
    margin-top: 20px;
  }
`;

export const SidebarTitle = styled.h3`
  color: #fff;
  margin-bottom: 20px;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #ccc;
  span.total {
    color: #00e0ff;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Horario = styled.div`
  width: 100%;
  background: #0d0d0d;
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  padding: 25px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TimeButton = styled.button`
  background: ${props => props.$isSelected ? '#00e0ff' : '#0a0a0a'};
  color: ${props => props.$isSelected ? '#000' : '#fff'};
  border: 1px solid ${props => props.$isSelected ? '#00e0ff' : '#1a1a1a'};
  padding: 15px 0;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Inter Tight', sans-serif;

  &:hover {
    border-color: #00e0ff;
    color: ${props => !props.$isSelected ? '#00e0ff' : ''};
  }
`;

export const Dados = styled.div`
  width: 100%;
  background: #0d0d0d;
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  padding: 25px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Observacoes = styled.div`
  width: 100%;
  background: #0d0d0d;
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  padding: 25px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  background: #0a0a0a;
  border: 1px solid #1a1a1a;
  border-radius: 8px;
  padding: 12px;
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter Tight', sans-serif;
  resize: vertical;
  min-height: 100px;

  &::placeholder {
    color: #6b6b6b;
  }

  &:focus {
    outline: none;
    border-color: #00e0ff;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #0a0a0a;
  border: 1px solid #1a1a1a;
  border-radius: 8px;
  padding: 12px;

  svg {
    color: #6b6b6b;
    font-size: 18px;
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1rem;
    font-family: 'Inter Tight', sans-serif;

    &::placeholder {
      color: #6b6b6b;
    }

    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    border-color: #00e0ff;

    svg {
      color: #00e0ff;
    }
  }
`;

export const Modelo = styled.div`
  width: 100%;
  background: #0d0d0d;
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  padding: 25px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;



export const Button = styled.button`
  background: #00e0ff;
  color: #000;
  border: none;
  padding: 15px 0;
  border-radius: 8px;
  font-weight: 500;
  cursor: ${props => props.$isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s;
  font-family: 'Inter Tight', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  opacity: ${props => props.$isDisabled ? 0.5 : 1};
  

  &:hover {
    background: ${props => props.$isDisabled ? '#00e0ff' : '#00d1ff'};
  }
`;
