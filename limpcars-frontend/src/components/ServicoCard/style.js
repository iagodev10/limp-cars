import styled from "styled-components";

export const Card = styled.article`
  width: 100%;
  min-width: 0;
  background: linear-gradient(180deg, #1c1c1e 0%, #141416 100%);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  transition: all 0.35s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

  &:hover {
    border-color: rgba(0, 224, 255, 0.25);
    box-shadow: 0 12px 40px rgba(0, 224, 255, 0.12), 0 4px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #0a0a0c;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    pointer-events: none;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
`;

export const DurationBadge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  min-width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #00e0ff;
  color: #000;
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter Tight", sans-serif;
  box-shadow: 0 4px 12px rgba(0, 224, 255, 0.4);
  z-index: 1;
  letter-spacing: 0.02em;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
  gap: 10px;

  @media (max-width: 480px) {
    padding: 16px;
    gap: 8px;
  }
`;

export const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  font-family: "Inter Tight", sans-serif;
  line-height: 1.3;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
  color: rgba(255, 255, 255, 0.65);
  font-family: "Inter Tight", sans-serif;
  line-height: 1.5;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Price = styled.span`
  font-size: 1.35rem;
  font-weight: 800;
  color: #00e0ff;
  font-family: "Inter Tight", sans-serif;
  margin: 4px 0 4px 0;
  letter-spacing: -0.02em;
  text-shadow: 0 0 20px rgba(0, 224, 255, 0.2);

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: "Inter Tight", sans-serif;
  border: 1px solid #00e0ff;
  background: ${(p) => (p.$added ? "#00e0ff" : "transparent")};
  color: ${(p) => (p.$added ? "#000" : "#00e0ff")};
  margin-top: 4px;

  &:hover {
    background: ${(p) =>
      p.$added ? "rgba(0, 224, 255, 0.9)" : "rgba(0, 224, 255, 0.12)"};
    transform: translateY(-1px);
    box-shadow: 0 4px 16px
      ${(p) =>
        p.$added ? "rgba(0, 224, 255, 0.35)" : "rgba(0, 224, 255, 0.15)"};
  }

  &:active {
    transform: translateY(0);
  }
`;
