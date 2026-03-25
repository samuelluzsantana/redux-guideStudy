import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 36px 40px 60px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  align-items: start;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 20px 16px;
  }
`;

export const CartSection = styled.div`
  background: #E8DCCA;
  border: 1px solid rgba(45, 32, 22, 0.12);
  padding: 28px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 2px solid #2D2016;

  h1 {
    font-family: "Archivo Black", "Arial Black", sans-serif;
    font-size: 1.8rem;
    font-weight: 900;
    color: #2D2016;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.3rem;
    }
  }
`;

export const RemoveAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #8B6F4E;
  font-size: 0.75rem;
  cursor: pointer;
  transition: color 0.2s;
  font-family: inherit;
  padding: 6px 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    color: #C1272D;
  }

  svg {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.68rem;
    padding: 4px 6px;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #8B6F4E;

  svg {
    font-size: 3.5rem;
    margin-bottom: 16px;
    color: #b8a68e;
  }

  h2 {
    font-family: "Archivo Black", sans-serif;
    font-size: 1.1rem;
    font-weight: 900;
    color: #2D2016;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 0.85rem;
    color: #8B6F4E;
  }

  @media (max-width: 768px) {
    padding: 40px 16px;

    svg { font-size: 2.5rem; }
    h2 { font-size: 0.95rem; }
  }
`;

export const ShopNowButton = styled.button`
  margin-top: 24px;
  padding: 12px 36px;
  background: #2D2016;
  color: #F0E8D8;
  border: 2px solid #2D2016;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    background: transparent;
    color: #2D2016;
  }
`;
