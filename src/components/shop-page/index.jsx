import React, { useMemo, useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";
import anime from "animejs";
import products from "../../data/products";
import { addProductToCart } from "../../reudx/cart/actions";
import * as Styles from "./styles";

const ProductCardItem = React.memo(({ product, index, isInCart, qtyInCart }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const cardRef = useRef(null);

  const handleAddToCart = useCallback(() => {
    dispatch(addProductToCart(product));

    // Anime.js pulse on add
    if (cardRef.current) {
      anime({
        targets: cardRef.current,
        scale: [1, 0.96, 1.02, 1],
        duration: 400,
        easing: "easeOutElastic(1, .6)",
      });
    }
  }, [dispatch, product]);

  return (
    <Styles.ProductCard ref={cardRef} index={index}>
      <Styles.ProductImageWrapper>
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
        />
        <Styles.ProductOverlay>
          <Styles.AddButton
            className={isInCart ? "in-cart" : "default"}
            onClick={handleAddToCart}
          >
            {isInCart ? (
              <>
                <BsCartCheckFill size={16} />
                {t("shop.inCart")} ({qtyInCart}) — {t("shop.addMore")}
              </>
            ) : (
              <>
                <BsCartPlus size={16} />
                {t("shop.addToCart")}
              </>
            )}
          </Styles.AddButton>
        </Styles.ProductOverlay>
      </Styles.ProductImageWrapper>

      <Styles.ProductDetails>
        <div className="product-name">{product.name}</div>
        <div className="product-price">R$ {product.price}</div>
      </Styles.ProductDetails>
    </Styles.ProductCard>
  );
});

const ShopPage = () => {
  const { t } = useTranslation();
  const gridRef = useRef(null);

  const cartProducts = useSelector(
    (state) => state.cartReducer.products
  );

  const cartMap = useMemo(() => {
    const map = {};
    cartProducts.forEach((p) => {
      map[p.id] = p.quantity;
    });
    return map;
  }, [cartProducts]);

  // Anime.js stagger entrance
  useEffect(() => {
    if (gridRef.current) {
      anime({
        targets: gridRef.current.children,
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(70, { start: 100 }),
        duration: 600,
        easing: "easeOutCubic",
      });
    }
  }, []);

  return (
    <Styles.ShopContainer>
      <Styles.ShopHeader>
        <h1>{t("shop.title")}</h1>
        <span>{products.length} {t("shop.products")}</span>
      </Styles.ShopHeader>

      <Styles.ProductGrid ref={gridRef}>
        {products.map((product, index) => (
          <ProductCardItem
            key={product.id}
            product={product}
            index={index}
            isInCart={!!cartMap[product.id]}
            qtyInCart={cartMap[product.id] || 0}
          />
        ))}
      </Styles.ProductGrid>
    </Styles.ShopContainer>
  );
};

export default ShopPage;
