import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  animation: fadeIn 0.2s ease;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const Card = styled.div`
  width: min(420px, 92vw);
  max-width: 100%;
  height: 100%;
  background: #1e1e1e;
  border-left: 1px solid rgba(0, 224, 255, 0.2);
  border-radius: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;
  overflow: hidden;
  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
`;

export const Icone = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

export const IconeBox = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid rgba(0, 224, 255, 0.4);
  background: rgba(0, 224, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00e0ff;
  flex-shrink: 0;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
`;

export const Grande = styled.h2`
  color: #fff;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0;
  font-family: "Inter Tight", sans-serif;
`;

export const Pequeno = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  font-family: "Inter Tight", sans-serif;
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Lista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 16px 20px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.li`
  padding: 14px;
  background: #2a2a2a;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  position: relative;
`;

export const ItemThumb = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  background: #1a1a1a;
`;

export const ItemThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemNome = styled.span`
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Inter Tight", sans-serif;
  line-height: 1.3;
`;

export const ItemDuracao = styled.span`
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.8rem;
  font-family: "Inter Tight", sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ItemPreco = styled.span`
  color: #00e0ff;
  font-size: 1.1rem;
  font-weight: 800;
  font-family: "Inter Tight", sans-serif;
  margin-top: 2px;
`;

export const RemoverBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  color: #e55;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #ff6b6b;
    background: rgba(255, 100, 100, 0.15);
  }
`;

export const Footer = styled.footer`
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: rgba(0, 0, 0, 0.2);
`;

export const TempoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TempoLabel = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-family: "Inter Tight", sans-serif;
`;

export const TempoValor = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-family: "Inter Tight", sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalLabel = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 600;
  font-family: "Inter Tight", sans-serif;
`;

export const TotalValor = styled.span`
  color: #00e0ff;
  font-size: 1.5rem;
  font-weight: 800;
  font-family: "Inter Tight", sans-serif;
`;

export const BotoesRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 6px;
`;

export const BtnLimpar = styled.button`
  flex: 1;
  padding: 14px 18px;
  border-radius: 10px;
  border: 1px solid #00e0ff;
  background: transparent;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: "Inter Tight", sans-serif;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 224, 255, 0.1);
  }
`;

export const BtnAgendar = styled.button`
  flex: 1;
  padding: 14px 18px;
  border-radius: 10px;
  border: none;
  background: #00e0ff;
  color: #000;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: "Inter Tight", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background: #00c4e0;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 224, 255, 0.4);
  }
`;
