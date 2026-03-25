import styled from "styled-components";

export const SummaryContainer = styled.div`
  background: #E8DCCA;
  border: 1px solid rgba(45, 32, 22, 0.12);
  padding: 28px;
  position: sticky;
  top: 80px;

  @media (max-width: 900px) {
    position: static;
    padding: 20px;
  }
`;

export const PromoRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;

  input {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid rgba(45, 32, 22, 0.2);
    border-radius: 0;
    background: #F0E8D8;
    font-size: 0.82rem;
    outline: none;
    transition: border-color 0.2s;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:focus { border-color: #2D2016; }
    &::placeholder { color: #b8a68e; text-transform: uppercase; }
  }

  button {
    padding: 10px 18px;
    border: 1px solid #2D2016;
    border-radius: 0;
    background: transparent;
    font-weight: 700;
    font-size: 0.78rem;
    cursor: pointer;
    color: #2D2016;
    transition: all 0.2s;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
      background: #2D2016;
      color: #F0E8D8;
    }
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.isTotal ? "24px" : "12px")};
  padding-top: ${(props) => (props.isTotal ? "16px" : "0")};
  border-top: ${(props) => (props.isTotal ? "2px solid #2D2016" : "none")};

  .label {
    font-size: ${(props) => (props.isTotal ? "0.85rem" : "0.8rem")};
    font-weight: ${(props) => (props.isTotal ? "700" : "400")};
    color: ${(props) => (props.isTotal ? "#2D2016" : "#8B6F4E")};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .value {
    font-family: "Bebas Neue", sans-serif;
    font-size: ${(props) => (props.isTotal ? "1.5rem" : "1rem")};
    font-weight: 400;
    color: ${(props) =>
      props.isSavings ? "#5A7D3A" : "#2D2016"};
    letter-spacing: 0.5px;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #2D2016;
  color: #F0E8D8;
  border: 2px solid #2D2016;
  border-radius: 0;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    background: transparent;
    color: #2D2016;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ContinueShopping = styled.div`
  text-align: center;
  margin-top: 16px;

  a {
    color: #8B6F4E;
    text-decoration: none;
    font-size: 0.78rem;
    transition: color 0.2s;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
      color: #2D2016;
      text-decoration: underline;
    }
  }
`;
