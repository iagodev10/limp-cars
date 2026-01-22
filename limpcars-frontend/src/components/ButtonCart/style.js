import styled from "styled-components";

export const Card = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: linear-gradient(135deg, #00e0ff 0%, #00b8d4 100%);
  color: #000;
  padding: 12px 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 224, 255, 0.35);
  z-index: 999;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: 'Inter Tight', sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 224, 255, 0.45);
  }
`;

export const IconGroup = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 999px;
  background: #000;
  color: #00e0ff;
  font-size: 0.7rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const CartTotal = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: #000;
  letter-spacing: 0.02em;
`;