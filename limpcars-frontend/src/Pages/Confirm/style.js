import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #022c2f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Texto = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  text-align: center;
`;

export const Sub = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
  text-align: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 520px;
  background: #0d0d0d;
  border: 1px solid #1a1a1a;
  border-radius: 14px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TituloCard = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #1a1a1a;
  margin: 4px 0 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #cfcfcf;
`;

export const Label = styled.span`
  color: #8c8c8c;
`;

export const Value = styled.span`
  color: #ffffff;
`;

export const TotalRow = styled(Row)`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #1a1a1a;
`;

export const TotalLabel = styled.span`
  font-weight: 600;
  color: #ffffff;
`;

export const TotalValue = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  color: #00e0ff;
`;

export const Button = styled.button`
  margin-top: 32px;
  background: #00e0ff;
  color: #000;
  border: none;
  padding: 14px 32px;
  border-radius: 999px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  font-family: 'Inter Tight', sans-serif;

  &:hover {
    background: #00c4e0;
  }
`;