import { useSelector } from "react-redux";
import "../App.css";
import { CartIcon } from "./Icons";

function Nav() {
  //the below selector is looking for one thing a function as a parameter so we get access to the entire store
  const { amount } = useSelector((store) => store.cart);
  //   console.log(useSelector((store) => console.log(store)));
  return (
    <nav>
      <div className="nav-center">
        <h4>Redux Practice</h4>
        <div className="nav-container">
          <CartIcon />
          <span>
            <sup>{amount}</sup>
          </span>
          {/* <div className="amount-container">
                    <p className="total-amount">0</p>
                </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
