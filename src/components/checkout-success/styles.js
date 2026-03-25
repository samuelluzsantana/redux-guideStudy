import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SuccessOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: #ffffff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  animation: ${fadeIn} 0.3s ease-out;

  /* Use Inter font specifically for this screen to match the clean wallet look */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const IconContainer = styled.div`
  width: 90px;
  height: 90px;
  background-color: #00aa55;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  box-shadow: 0 8px 24px rgba(0, 170, 85, 0.25);
  transform: scale(0); /* Anime.js will animate this */

  svg {
    color: white;
    stroke-width: 3;
  }
`;

export const PaidLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 8px;
  opacity: 0;
`;

export const AmountText = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 8px;
  letter-spacing: -1px;
  opacity: 0;

  span {
    font-size: 2.2rem;
    font-weight: 600;
    margin-right: 4px;
    vertical-align: super;
  }
`;

export const ToLabel = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 40px;
  opacity: 0;
  
  strong {
    color: #333;
    font-weight: 600;
  }
`;

export const ViewDetailsLink = styled.a`
  font-size: 0.95rem;
  color: #333;
  text-decoration: underline;
  font-weight: 500;
  margin-bottom: 60px;
  cursor: pointer;
  opacity: 0;

  &:hover {
    color: #000;
  }
`;

export const GreetingMessage = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 12px;
  text-align: center;
  opacity: 0;
`;

export const FarewellText = styled.div`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  max-width: 250px;
  line-height: 1.4;
  margin-bottom: 40px;
  opacity: 0;
`;

export const BackButton = styled.button`
  background: #f0f0f0;
  border: none;
  padding: 16px 32px;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  opacity: 0;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`;
