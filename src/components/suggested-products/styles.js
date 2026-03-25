import styled from "styled-components";

export const SuggestedContainer = styled.div`
  border-top: 1px solid #f0f0f0;
  margin-top: 10px;
  padding-top: 20px;
`;

export const SuggestedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${(props) => (props.isOpen ? "20px" : "0")};

  h3 {
    font-size: 0.95rem;
    font-weight: 500;
    color: #444;
  }

  svg {
    transition: transform 0.3s;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
    color: #888;
  }
`;

export const SuggestedGrid = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding-bottom: 10px;
  transition: all 0.3s ease;
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  overflow: hidden;
`;

export const SuggestedCard = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .suggested-image {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background: #fafafa;
    border-radius: 12px;
    padding: 10px;
    transition: all 0.2s;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    &:hover {
      background: #f0f0f0;
      transform: scale(1.03);
    }
  }

  .suggested-price {
    font-size: 0.9rem;
    font-weight: 700;
    color: #222;
    margin-bottom: 4px;
  }

  .suggested-name {
    font-size: 0.78rem;
    color: #888;
    margin-bottom: 10px;
    line-height: 1.3;
    max-width: 130px;
  }
`;

export const AddToCartMini = styled.button`
  padding: 6px 14px;
  border: 1.5px solid #8bc34a;
  border-radius: 6px;
  background: transparent;
  color: #8bc34a;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;

  &:hover {
    background: #8bc34a;
    color: #fff;
  }
`;
