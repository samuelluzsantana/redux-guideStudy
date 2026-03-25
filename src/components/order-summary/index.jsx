import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { clearCart } from "../../reudx/cart/actions";
import { selectProductTotalPrice } from "../../reudx/cart/cart.selectors";
import * as Styles from "./styles";

const OrderSummary = ({ onNavigate }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectProductTotalPrice);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const savings = Math.round(totalPrice * 0.005);
  const finalTotal = totalPrice - savings;

  const handleCheckout = () => {
    if (totalPrice === 0) return;
    
    // Navigate to the success screen which triggers the animation
    onNavigate("checkout-success");
    
    // Clear the cart state after navigation
    setTimeout(() => {
      dispatch(clearCart());
    }, 500); // Small delay to prevent layout jump under the transition
  };

  return (
    <Styles.SummaryContainer>
      <Styles.SummaryRow>
        <span className="label">{t("summary.subtotal")}</span>
        <span className="value">R$ {formatPrice(totalPrice)}</span>
      </Styles.SummaryRow>

      <Styles.SummaryRow isSavings>
        <span className="label">{t("summary.savings")}</span>
        <span className="value">− R$ {formatPrice(savings)}</span>
      </Styles.SummaryRow>

      <Styles.SummaryRow isTotal>
        <span className="label">{t("summary.total")}</span>
        <span className="value">R$ {formatPrice(finalTotal)}</span>
      </Styles.SummaryRow>

      <Styles.CheckoutButton 
        onClick={handleCheckout}
        disabled={totalPrice === 0}
        style={{ opacity: totalPrice === 0 ? 0.5 : 1, cursor: totalPrice === 0 ? 'not-allowed' : 'pointer' }}
      >
        {t("summary.checkout")}
      </Styles.CheckoutButton>

      <Styles.ContinueShopping>
        <a
          href="#shop"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("shop");
          }}
        >
          {t("summary.continueShopping")}
        </a>
      </Styles.ContinueShopping>
    </Styles.SummaryContainer>
  );
};

export default OrderSummary;
