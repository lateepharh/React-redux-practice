import React from "react";
import { buyCake } from "../redux";
// import { connect } from "react-redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h3>Number of Cakes - {props.numOfCakes}</h3>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
// this below functionit get the redux state as a parameter and returns and object.it calls every time the store state changes
const mapStateToProp = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
//selector returns  some state info form redux store

export default connect(mapStateToProp, mapDispatchToProps)(CakeContainer);
