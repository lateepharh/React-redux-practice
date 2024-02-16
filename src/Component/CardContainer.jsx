import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import CartItems from "./cartItems";
import Items from "./Items";
import { openModal } from "../features/modal/modalSlice";

function CardContainer() {
  const dispatch = useDispatch();
  const { amount, total, cartItems } = useSelector((store) => store.cart);
  console.log(amount);
  //   console.log(cartItems);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag is currently empty</h2>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div className="item-card">
        {cartItems.map((item) => {
          return <Items key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <h5>
          Total <span>#{total}</span>
        </h5>
        <button className="btn" onClick={() => dispatch(openModal())}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
}

export default CardContainer;
