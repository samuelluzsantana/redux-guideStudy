import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { BsTrash, BsCart3 } from "react-icons/bs";
import anime from "animejs";
import { clearCart } from "../../reudx/cart/actions";

import CartItemRow from "../cart-item-row";
import OrderSummary from "../order-summary";

import * as Styles from "./styles";

const CartPage = ({ onNavigate }) => {
  const { t } = useTranslation();
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();
  const sectionRef = useRef(null);

  const handleClearCart = () => {
    // Anime.js fade out on clear
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('[data-cart-item]');
      anime({
        targets: items,
        opacity: [1, 0],
        translateX: [0, -30],
        delay: anime.stagger(60),
        duration: 300,
        easing: "easeInCubic",
        complete: () => dispatch(clearCart()),
      });
    } else {
      dispatch(clearCart());
    }
  };

  // Anime.js entrance
  useEffect(() => {
    if (sectionRef.current && products.length > 0) {
      const items = sectionRef.current.querySelectorAll('[data-cart-item]');
      anime({
        targets: items,
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: anime.stagger(80, { start: 150 }),
        duration: 500,
        easing: "easeOutCubic",
      });
    }
  }, [products.length]);

  return (
    <Styles.PageContainer>
      <Styles.CartSection ref={sectionRef}>
        <Styles.CartHeader>
          <h1>{t("cart.title")}</h1>
          {products.length > 0 && (
            <Styles.RemoveAllButton onClick={handleClearCart}>
              <BsTrash /> {t("cart.removeAll")}
            </Styles.RemoveAllButton>
          )}
        </Styles.CartHeader>

        {products.length === 0 ? (
          <Styles.EmptyCart>
            <BsCart3 />
            <h2>{t("cart.emptyTitle")}</h2>
            <p>{t("cart.emptyText")}</p>
            <Styles.ShopNowButton onClick={() => onNavigate("shop")}>
              {t("cart.browseShop")}
            </Styles.ShopNowButton>
          </Styles.EmptyCart>
        ) : (
          products.map((product) => (
            <CartItemRow key={product.id} product={product} />
          ))
        )}
      </Styles.CartSection>

      <OrderSummary onNavigate={onNavigate} />
    </Styles.PageContainer>
  );
};

export default CartPage;
