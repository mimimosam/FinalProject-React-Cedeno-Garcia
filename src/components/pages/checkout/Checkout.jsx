import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { CheckoutContainer } from "./CheckoutContainer";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  let totalPrice = getTotalPrice();

  const formSubmit = (event) => {
    event.preventDefault();
    let order = {
      buyer: userInfo,
      items: cart,
      total: totalPrice,
    };

    let ordersCollection = collection(db, "orders");

    addDoc(ordersCollection || null, order || null).then((res) =>
      setOrderId(res.id)
    );
    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: increment(product.stock * -1) });
    });

    clearCart();
  };

  const gettingInfo = (event) => {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  return (
    <>
      <CheckoutContainer
        orderId={orderId}
        formSubmit={formSubmit}
        gettingInfo={gettingInfo}
      />
    </>
  );
};
