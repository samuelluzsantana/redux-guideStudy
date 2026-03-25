import { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { BsTrash } from "react-icons/bs";
import anime from "animejs";
import {
  removeProductFromCart,
  increaseProductQuantity,
  decraseProductQuantity,
} from "../../reudx/cart/actions";
import * as Styles from "./styles";

const CartItemRow = ({ product }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const rowRef = useRef(null);

  const handleRemove = useCallback(() => {
    if (rowRef.current) {
      anime({
        targets: rowRef.current,
        opacity: [1, 0],
        translateX: [0, -40],
        height: [rowRef.current.offsetHeight, 0],
        duration: 350,
        easing: "easeInCubic",
        complete: () => dispatch(removeProductFromCart(product.id)),
      });
    } else {
      dispatch(removeProductFromCart(product.id));
    }
  }, [dispatch, product.id]);

  const handleIncrease = useCallback(() => {
    dispatch(increaseProductQuantity(product.id));
  }, [dispatch, product.id]);

  const handleDecrease = useCallback(() => {
    dispatch(decraseProductQuantity(product.id));
  }, [dispatch, product.id]);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const lineTotal = product.price * product.quantity;

  return (
    <Styles.RowContainer ref={rowRef} data-cart-item>
      <Styles.ProductImage>
        <img src={product.imageUrl} alt={product.name} />
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <div className="product-name">{product.name}</div>
        <span className="stock-badge in-stock">{t("cart.inStock")}</span>
      </Styles.ProductInfo>

      <Styles.UnitPrice>R$ {formatPrice(product.price)}</Styles.UnitPrice>

      <Styles.QuantityControls>
        <button onClick={handleDecrease} aria-label="Decrease quantity">
          −
        </button>
        <span>{product.quantity}</span>
        <button onClick={handleIncrease} aria-label="Increase quantity">
          +
        </button>
      </Styles.QuantityControls>

      <Styles.LineTotal>
        <div className="current-price">R$ {formatPrice(lineTotal)}</div>
      </Styles.LineTotal>

      <Styles.DeleteButton onClick={handleRemove} aria-label="Remove item">
        <BsTrash size={16} />
      </Styles.DeleteButton>
    </Styles.RowContainer>
  );
};

export default CartItemRow;
