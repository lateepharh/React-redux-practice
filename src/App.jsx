import React, { useEffect } from "react";
import Nav from "./Component/Nav";
import CardContainer from "./Component/CardContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./Component/Modal";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading.....</h2>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Nav />
      <CardContainer />
    </main>
  );
}

export default App;
