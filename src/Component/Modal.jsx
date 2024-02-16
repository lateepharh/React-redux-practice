import React from "react";
import { closeModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
function Modal() {
  const dispatch = useDispatch();
  return (
    <section className="overlay">
      <div className="overlay-inner">
        <div>
          <h4>Remove all items from yor cart</h4>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default Modal;
