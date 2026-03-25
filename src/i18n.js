import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  "pt-BR": {
    translation: {
      // Nav
      nav: {
        shop: "Loja",
        computers: "Computadores",
        phones: "Celulares e tablets",
        cart: "Carrinho",
        everyDay: "Todos os dias 11h–19h",
        callBack: "Ligue-me",
        delivery: "Entrega e pagamento",
        guarantee: "Garantia",
      },
      // Shop
      shop: {
        title: "Loja",
        products: "produtos",
        addToCart: "Adicionar ao carrinho",
        inCart: "No carrinho",
        addMore: "Adicionar mais",
      },
      // Cart
      cart: {
        title: "Seu Carrinho",
        removeAll: "Remover todos",
        emptyTitle: "Seu carrinho está vazio",
        emptyText: "Adicione alguns produtos para começar!",
        browseShop: "Explorar Loja",
        inStock: "Em estoque",
        outOfStock: "Fora de estoque",
      },
      // Order Summary
      summary: {
        subtotal: "Subtotal",
        savings: "Sua economia",
        total: "Total",
        checkout: "Finalizar Compra",
        continueShopping: "Continuar comprando",
      },
      // Language
      lang: {
        label: "PT",
      },
    },
  },
  en: {
    translation: {
      nav: {
        shop: "Shop",
        computers: "Computers",
        phones: "Phones & Tablets",
        cart: "Cart",
        everyDay: "Every day 11am–19pm",
        callBack: "Call me back",
        delivery: "Delivery & payment",
        guarantee: "Guarantee",
      },
      shop: {
        title: "Shop",
        products: "products",
        addToCart: "Add to cart",
        inCart: "In cart",
        addMore: "Add more",
      },
      cart: {
        title: "Your Cart",
        removeAll: "Remove all items",
        emptyTitle: "Your cart is empty",
        emptyText: "Add some products to get started!",
        browseShop: "Browse Shop",
        inStock: "In stock",
        outOfStock: "Out of stock",
      },
      summary: {
        subtotal: "Item Subtotal",
        savings: "Your savings",
        total: "Total",
        checkout: "Proceed to checkout",
        continueShopping: "Continue shopping",
      },
      lang: {
        label: "EN",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt-BR",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
