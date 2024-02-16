import React from "react";
import { ArrowDown, ArrowUp } from "./Icons";
import "../App.css";
import { useDispatch } from "react-redux";
import { removeItem, decrease, increase } from "../features/cart/cartSlice";

function Items(props) {
  const dispatch = useDispatch();
  const { id, image, title, price, amount } = props;
  return (
    <article className="cart-item">
      <div className="item-flex">
        <img src={image} alt="" />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">#{price}</h4>
          <button
            className="remove-btn"
            onClick={() => dispatch(removeItem(id))}
          >
            Remove
          </button>
        </div>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ArrowUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem({ id }));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ArrowDown />
        </button>
      </div>
    </article>
  );
}

export default Items;
