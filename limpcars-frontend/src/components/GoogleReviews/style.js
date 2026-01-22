import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 6%;
  background-color: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  letter-spacing: 2px;
  color: #00e0ff;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-family: 'Inter Tight', sans-serif;
  font-size: 38px;
  color: #ffffff;
  font-weight: 400;

  span {
    color: #00e0ff;
  }
`;

export const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
`;

export const MarqueeTrack = styled.div`
  display: flex;
  gap: 24px;
  width: max-content;
  animation: scroll 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const ReviewCard = styled.div`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 320px;
  flex-shrink: 0;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 224, 255, 0.3);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00e0ff, #0099cc);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Inter Tight', sans-serif;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h4`
  color: #ffffff;
  font-family: 'Inter Tight', sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export const Date = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  color: #fbbf24; /* Amber 400 */
`;

export const Comment = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  line-height: 1.6;
`;

export const GoogleLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const ViewAllButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  border-radius: 99px;
  background-color: transparent;
  border: 1px solid rgba(0, 224, 255, 0.3);
  color: #00e0ff;
  font-family: 'Inter Tight', sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 12px;

  &:hover {
    background-color: rgba(0, 224, 255, 0.1);
    border-color: #00e0ff;
    transform: translateY(-2px);
  }
`;
