import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/pages/home/Home";
import { Cart } from "./components/pages/cart/Cart";
import { ProductDetailContainer } from "./components/common/productDetail/ProductDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import { Footer } from "../src/components/layout/Footer";
import { Checkout } from "./components/pages/checkout/Checkout";

const App = () => {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetailContainer />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
};

export default App;
