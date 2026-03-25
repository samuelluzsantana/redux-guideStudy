import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ShopContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 36px 40px 60px;
  position: relative;
  z-index: 1;
`;

export const ShopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid #2D2016;

  h1 {
    font-family: "Archivo Black", "Arial Black", sans-serif;
    font-size: 2.4rem;
    font-weight: 900;
    color: #2D2016;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1;
  }

  span {
    font-size: 0.8rem;
    color: #8B6F4E;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: #E8DCCA;
  border: 1px solid rgba(45, 32, 22, 0.12);
  overflow: hidden;
  animation: ${fadeIn} 0.4s ease both;
  animation-delay: ${(props) => props.index * 0.05}s;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(45, 32, 22, 0.15);
  }

  /* Corner mark like catalog registration */
  &::before {
    content: '⊕';
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 0.65rem;
    color: rgba(45, 32, 22, 0.2);
    z-index: 2;
  }
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 290px;
  overflow: hidden;
  background: #DDD0BC;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: saturate(0.9);
  }

  ${ProductCard}:hover & img {
    transform: scale(1.04);
    filter: saturate(1);
  }
`;

export const ProductOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(26, 18, 11, 0);
  display: flex;
  align-items: flex-end;
  padding: 12px;
  transition: background 0.3s;

  ${ProductCard}:hover & {
    background: rgba(26, 18, 11, 0.45);
  }
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 11px;
  border: none;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Space Grotesk", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0;
  transform: translateY(8px);
  text-transform: uppercase;
  letter-spacing: 1.5px;

  ${ProductCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  &.default {
    background: #F0E8D8;
    color: #2D2016;
    border: 1px solid #2D2016;
    &:hover {
      background: #2D2016;
      color: #F0E8D8;
    }
  }

  &.in-cart {
    background: #2D2016;
    color: #D4A574;
    border: 1px solid #D4A574;
    &:hover {
      background: #D4A574;
      color: #2D2016;
    }
  }
`;

export const ProductDetails = styled.div`
  padding: 12px 14px 16px;
  border-top: 1px solid rgba(45, 32, 22, 0.1);

  .product-name {
    font-size: 0.78rem;
    font-weight: 600;
    color: #2D2016;
    margin-bottom: 4px;
    line-height: 1.35;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .product-price {
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.15rem;
    font-weight: 400;
    color: #8B6F4E;
    letter-spacing: 1px;
  }
`;

export const CartBadgeBounce = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.35); }
  60% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;
