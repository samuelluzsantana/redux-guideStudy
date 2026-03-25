import { useState, useCallback } from "react";
import "./App.css";
import NavBar from "./components/nav-bar";
import ShopPage from "./components/shop-page";
import CartPage from "./components/cart-page";
import CheckoutSuccess from "./components/checkout-success";
import { useSelector } from "react-redux";
import { selectProductTotalPrice } from "./reudx/cart/cart.selectors";

const App = () => {
  const [currentPage, setCurrentPage] = useState("shop");
  
  // We need to store the total amount before clearing the cart
  // so the success screen can still display what was paid.
  const [lastPaidAmount, setLastPaidAmount] = useState(0);
  const currentTotal = useSelector(selectProductTotalPrice);

  const navigateTo = useCallback((page) => {
    if (page === "checkout-success") {
      setLastPaidAmount(currentTotal);
    }
    setCurrentPage(page);
  }, [currentTotal]);

  return (
    <div className="app-wrapper">
      {/* Hide navbar on the success screen for an immersive mobile wallet feel */}
      {currentPage !== "checkout-success" && (
        <NavBar currentPage={currentPage} onNavigate={navigateTo} />
      )}
      
      <div className="page-transition">
        {currentPage === "shop" && <ShopPage />}
        {currentPage === "cart" && <CartPage onNavigate={navigateTo} />}
        {currentPage === "checkout-success" && (
          <CheckoutSuccess 
            totalAmount={lastPaidAmount} 
            onNavigate={navigateTo} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
