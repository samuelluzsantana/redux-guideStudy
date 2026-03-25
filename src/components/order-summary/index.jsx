import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { selectProductTotalPrice } from "../../reudx/cart/cart.selectors";
import * as Styles from "./styles";

const OrderSummary = ({ onNavigate }) => {
  const { t } = useTranslation();
  const totalPrice = useSelector(selectProductTotalPrice);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const savings = Math.round(totalPrice * 0.005);
  const finalTotal = totalPrice - savings;

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

      <Styles.CheckoutButton>{t("summary.checkout")}</Styles.CheckoutButton>

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
