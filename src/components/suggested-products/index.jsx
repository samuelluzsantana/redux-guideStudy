import { useState } from "react";
import { useDispatch } from "react-redux";
import { BsChevronUp } from "react-icons/bs";
import { addProductToCart } from "../../reudx/cart/actions";
import { suggestedProducts } from "../../data/products";
import * as Styles from "./styles";

const SuggestedProducts = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleAddToCart = (product) => {
    dispatch(addProductToCart({ ...product, stock: "In stock" }));
  };

  return (
    <Styles.SuggestedContainer>
      <Styles.SuggestedHeader isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <h3>You may need these for smooth experience</h3>
        <BsChevronUp size={16} />
      </Styles.SuggestedHeader>

      <Styles.SuggestedGrid isOpen={isOpen}>
        {suggestedProducts.map((product) => (
          <Styles.SuggestedCard key={product.id}>
            <div className="suggested-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="suggested-price">{formatPrice(product.price)} ₽</div>
            <div className="suggested-name">{product.name}</div>
            <Styles.AddToCartMini onClick={() => handleAddToCart(product)}>
              Add to cart
            </Styles.AddToCartMini>
          </Styles.SuggestedCard>
        ))}
      </Styles.SuggestedGrid>
    </Styles.SuggestedContainer>
  );
};

export default SuggestedProducts;
