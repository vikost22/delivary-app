import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home/home.jsx";
import Shop from "./pages/shop/shop";
import Modal from "./components/Modal";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/shop" element={<Shop />} />
        <Route index path="/cart" element={<Cart/>} />
      </Routes>
      <Modal/>
    </>
  );
}

export default App;
