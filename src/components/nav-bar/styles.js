import styled, { keyframes } from "styled-components";

/* ========= NAVBAR ========= */

export const TopBar = styled.div`
  width: 100%;
  background: #2D2016;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 40px;
  font-size: 0.72rem;
  color: #c4aa88;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  a {
    color: #c4aa88;
    text-decoration: none;
    &:hover { color: #F0E8D8; }
  }
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .call-back {
    color: #D4A574;
    cursor: pointer;
    font-weight: 600;
    &:hover { text-decoration: underline; }
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  background: #1A120B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid #3D2B1F;

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const Logo = styled.div`
  font-family: "Archivo Black", "Arial Black", sans-serif;
  font-size: 1.3rem;
  font-weight: 900;
  color: #F0E8D8;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  z-index: 101;

  .dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #D4A574;
    border-radius: 50%;
    margin: 0 3px;
    position: relative;
    top: -1px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #F0E8D8;
  cursor: pointer;
  padding: 4px;
  z-index: 101;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  a {
    color: #b8a68e;
    text-decoration: none;
    font-size: 0.82rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color 0.2s;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 6px 0;
    border-bottom: 2px solid transparent;

    &:hover { color: #F0E8D8; }

    &.active {
      color: #D4A574;
      border-bottom-color: #D4A574;
    }

    svg { font-size: 0.65rem; }
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1A120B;
    z-index: 99;
    padding: 80px 24px 24px;
    gap: 0;

    &.open {
      display: flex;
    }

    a {
      font-size: 1.1rem;
      padding: 16px 0;
      border-bottom: 1px solid #3D2B1F;
      width: 100%;
    }
  }
`;

export const MobileCartLink = styled.div`
  display: none;
  color: #D4A574;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 16px 0;
  cursor: pointer;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  svg {
    font-size: 1.2rem;
    color: #b8a68e;
    cursor: pointer;
    transition: color 0.2s;
    &:hover { color: #F0E8D8; }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LangToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: 1px solid #5A4A3A;
  color: #b8a68e;
  padding: 5px 10px;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    border-color: #D4A574;
    color: #D4A574;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 0.65rem;
  }
`;

const badgeBounce = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.4); }
  60% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

export const CartButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #F0E8D8;
  padding: 10px 20px;
  border: 2px solid #D4A574;
  border-radius: 0;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  svg {
    color: #D4A574;
    font-size: 1rem;
  }

  &:hover {
    background: #D4A574;
    color: #1A120B;
    svg { color: #1A120B; }
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.75rem;
    border-width: 1.5px;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #C1272D;
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${badgeBounce} 0.4s ease;
  border: 2px solid #1A120B;
`;
