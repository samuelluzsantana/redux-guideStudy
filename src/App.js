import { useState, useCallback } from "react";
import "./App.css";
import NavBar from "./components/nav-bar";
import ShopPage from "./components/shop-page";
import CartPage from "./components/cart-page";

const App = () => {
  const [currentPage, setCurrentPage] = useState("shop");

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="app-wrapper">
      <NavBar currentPage={currentPage} onNavigate={navigateTo} />
      <div className="page-transition">
        {currentPage === "shop" ? <ShopPage /> : <CartPage onNavigate={navigateTo} />}
      </div>
    </div>
  );
};

export default App;
