import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid rgba(45, 32, 22, 0.1);
  gap: 18px;
  overflow: hidden;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
    padding: 14px 0;
  }
`;

export const ProductImage = styled.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  border: 1px solid rgba(45, 32, 22, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: #DDD0BC;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    filter: saturate(0.9);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    min-width: 60px;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  min-width: 100px;

  .product-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: #2D2016;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.2px;
    line-height: 1.3;
  }

  .stock-badge {
    font-size: 0.68rem;
    font-weight: 700;
    padding: 2px 8px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &.in-stock {
      color: #5A7D3A;
      background: rgba(90, 125, 58, 0.1);
      border: 1px solid rgba(90, 125, 58, 0.2);
    }

    &.out-of-stock {
      color: #8B6F4E;
      background: rgba(139, 111, 78, 0.08);
      border: 1px solid rgba(139, 111, 78, 0.15);
    }
  }

  @media (max-width: 768px) {
    .product-name { font-size: 0.78rem; }
    .stock-badge { font-size: 0.6rem; }
  }
`;

export const UnitPrice = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 1rem;
  color: #8B6F4E;
  min-width: 75px;
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 90px;
  justify-content: center;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid rgba(45, 32, 22, 0.25);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    color: #2D2016;
    font-size: 0.95rem;

    &:hover {
      border-color: #2D2016;
      background: #2D2016;
      color: #F0E8D8;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  span {
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    color: #2D2016;
    min-width: 20px;
    text-align: center;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    gap: 8px;
    min-width: auto;

    button {
      width: 28px;
      height: 28px;
      font-size: 0.85rem;
    }
  }
`;

export const LineTotal = styled.div`
  min-width: 80px;
  text-align: right;

  .current-price {
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.1rem;
    color: #2D2016;
    letter-spacing: 0.5px;
  }

  .original-price {
    font-size: 0.72rem;
    color: #b8a68e;
    text-decoration: line-through;
    margin-top: 2px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    min-width: auto;
    .current-price { font-size: 1rem; }
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #b8a68e;
  padding: 6px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #C1272D;
  }
`;
