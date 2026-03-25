import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { BsSearch, BsHeart, BsPerson, BsCart3, BsChevronDown, BsShop, BsList, BsX, BsGlobe } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import { selectProductsCount, selectProductTotalPrice } from "../../reudx/cart/cart.selectors";
import * as Styles from "./styles";

const NavBar = ({ currentPage, onNavigate }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const productsCount = useSelector(selectProductsCount);
  const totalPrice = useSelector(selectProductTotalPrice);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "pt-BR" ? "en" : "pt-BR");
  };

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <Styles.TopBar>
        <Styles.TopBarLeft>
          <span>
            <IoLocationOutline /> Volgograd
          </span>
          <a href="#delivery">{t("nav.delivery")}</a>
          <a href="#guarantee">{t("nav.guarantee")}</a>
        </Styles.TopBarLeft>
        <Styles.TopBarRight>
          <span>{t("nav.everyDay")}</span>
          <span>8 (495) 235-12-23</span>
          <span className="call-back">{t("nav.callBack")}</span>
        </Styles.TopBarRight>
      </Styles.TopBar>

      <Styles.NavContainer>
        <Styles.Logo onClick={() => handleNav("shop")} style={{ cursor: "pointer" }}>
          MA<span className="dot"></span>NOM.RU
        </Styles.Logo>

        <Styles.HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <BsX size={24} /> : <BsList size={24} />}
        </Styles.HamburgerButton>

        <Styles.NavLinks className={menuOpen ? "open" : ""}>
          <a
            href="#shop"
            className={currentPage === "shop" ? "active" : ""}
            onClick={(e) => { e.preventDefault(); handleNav("shop"); }}
          >
            <BsShop style={{ marginRight: 4 }} /> {t("nav.shop")}
          </a>
          <a href="#computers">
            {t("nav.computers")} <BsChevronDown />
          </a>
          <a href="#phones">
            {t("nav.phones")} <BsChevronDown />
          </a>

          {/* Mobile-only items */}
          <Styles.MobileCartLink onClick={() => handleNav("cart")}>
            <BsCart3 /> {t("nav.cart")} ({productsCount})
          </Styles.MobileCartLink>
        </Styles.NavLinks>

        <Styles.NavRight>
          <Styles.NavIcons>
            <BsSearch />
            <BsHeart />
            <BsPerson />
          </Styles.NavIcons>

          <Styles.LangToggle onClick={toggleLang}>
            <BsGlobe size={14} />
            {t("lang.label")}
          </Styles.LangToggle>

          <Styles.CartButton
            onClick={() => onNavigate("cart")}
          >
            <BsCart3 />
            {productsCount > 0 ? (
              <>R$ {formatPrice(totalPrice)} ({productsCount})</>
            ) : (
              <>{t("nav.cart")} (0)</>
            )}
            {productsCount > 0 && (
              <Styles.CartBadge key={productsCount}>
                {productsCount}
              </Styles.CartBadge>
            )}
          </Styles.CartButton>
        </Styles.NavRight>
      </Styles.NavContainer>
    </>
  );
};

export default NavBar;
