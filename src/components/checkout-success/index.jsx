import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BsCheckLg } from "react-icons/bs";
import anime from "animejs";
import * as Styles from "./styles";

const CheckoutSuccess = ({ totalAmount, onNavigate }) => {
  const { t } = useTranslation();
  const iconRef = useRef(null);
  const textGroupRef = useRef(null);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    // Reveal animations sequence
    anime.timeline({ easing: "easeOutExpo" })
      .add({
        targets: iconRef.current,
        scale: [0, 1],
        duration: 800,
        easing: "easeOutElastic(1, .5)",
        delay: 200,
      })
      .add({
        targets: textGroupRef.current.children,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(150),
      }, "-=400"); // Start slightly before the icon finishes
  }, []);

  return (
    <Styles.SuccessOverlay>
      <Styles.IconContainer ref={iconRef}>
        <BsCheckLg size={45} />
      </Styles.IconContainer>

      <div ref={textGroupRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Styles.PaidLabel>{t("success.paid")}</Styles.PaidLabel>
        
        <Styles.AmountText>
          <span>R$</span>{formatPrice(totalAmount)}
        </Styles.AmountText>

        <Styles.ToLabel>
          {t("success.to").replace("DMRC limited", "")} <strong>DMRC limited</strong>
        </Styles.ToLabel>

        <Styles.ViewDetailsLink>
          {t("success.viewDetails")}
        </Styles.ViewDetailsLink>

        <Styles.GreetingMessage>
          {t("success.greeting")}
        </Styles.GreetingMessage>

        <Styles.FarewellText>
          {t("success.farewell")}
        </Styles.FarewellText>

        <Styles.BackButton onClick={() => onNavigate("shop")}>
          {t("success.backButton")}
        </Styles.BackButton>
      </div>
    </Styles.SuccessOverlay>
  );
};

export default CheckoutSuccess;
