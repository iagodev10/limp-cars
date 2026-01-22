import styled from "styled-components";
import sobreImg from "../../assets/images/sobre.png";

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 24px 32px;
  background: #020203;
  background-image: url(${sobreImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(2, 2, 3, 0.85);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #ff4d4f;
  background: transparent;
  color: #ff4d4f;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 77, 79, 0.1);
  }
`;

// Barra de Pesquisa
export const SearchContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  color: #a0a0a0;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  background: rgba(5, 6, 8, 0.8);
  border: 1px solid rgba(17, 18, 24, 0.8);
  border-radius: 8px;
  padding: 12px 12px 12px 40px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #00e0ff;
    box-shadow: 0 0 0 2px rgba(0, 224, 255, 0.1);
  }

  &::placeholder {
    color: #666;
  }
`;


export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: rgba(5, 6, 8, 0.95);
  border-radius: 12px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid rgba(17, 18, 24, 0.8);
  backdrop-filter: blur(10px);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background: rgba(8, 10, 16, 0.6);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid ${(props) => (props.$highlight ? "rgba(0, 224, 255, 0.3)" : "rgba(17, 18, 24, 0.5)")};
  
  ${(props) =>
    props.$highlight &&
    `
    background: rgba(0, 224, 255, 0.08);
  `}
`;

export const InfoLabel = styled.div`
  font-size: 0.75rem;
  color: #a0a0a0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`;

export const InfoValue = styled.div`
  font-size: 0.95rem;
  color: #ffffff;
  font-weight: 500;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`;

export const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 18px;
  font-size: 1rem;
  color: #e8e8e8;
  font-weight: 500;
`;

export const InfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

export const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  font-size: 0.9rem;
  min-width: 120px;
`;

export const DateText = styled.span`
  color: #ffffff;
`;

export const TimeText = styled.span`
  color: #c0c0c0;
`;

export const TotalText = styled.span`
  color: #00e0ff;
  font-weight: 600;
`;

export const ServicesCount = styled.span`
  font-size: 0.85rem;
  color: #c0c0c0;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid
    ${(props) => (props.$danger ? "rgba(255, 77, 79, 0.6)" : "#22242e")};
  background: #050608;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.$danger ? "#ff4d4f" : "#ffffff")};
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: ${(props) =>
      props.$danger ? "rgba(255, 77, 79, 0.12)" : "#11131b"};
    transform: translateY(-1px);
  }
`;

export const EmptyState = styled.div`
  margin-top: 40px;
  text-align: center;
  color: #777;
`;

// Modal

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 720px;
  max-height: 90vh;
  background: #050608;
  border-radius: 16px;
  border: 1px solid #111218;
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ModalTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #c0c0c0;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Section = styled.div``;

export const SectionTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #b0b0b0;
  margin-bottom: 6px;
`;

export const DetailRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 24px;
  font-size: 0.9rem;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DetailLabel = styled.span`
  color: #8c8c8c;
  font-size: 0.8rem;
`;

export const DetailValue = styled.span`
  color: #ffffff;
`;

export const ObservacoesBox = styled.div`
  background: #080a10;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 0.9rem;
  color: #d0d0d0;
`;

export const ObservacoesPreview = styled.div`
  margin-top: 4px;
  font-size: 0.9rem;
  color: #b0b0b0;
  font-style: italic;
  padding: 8px 12px;
  background: rgba(8, 10, 16, 0.4);
  border-radius: 6px;
  border-left: 3px solid rgba(0, 224, 255, 0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ServicosList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ServicoItem = styled.div`
  background: #080a10;
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

export const ServicoNome = styled.span`
  font-weight: 500;
`;

export const ServicoValor = styled.span`
  color: #00e0ff;
  font-weight: 500;
`;
