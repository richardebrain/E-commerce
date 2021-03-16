import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ToggleCartView } from "../../Redux/cart/cart.action";

const CartIcon = ({ ToggleCartView }) => {
  return (
    <div className="cart-icon" onClick={ToggleCartView}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  ToggleCartView: () => dispatch(ToggleCartView()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
