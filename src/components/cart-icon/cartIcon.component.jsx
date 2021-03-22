import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ToggleCartView } from "../../Redux/cart/cart.action";

const CartIcon = ({ ToggleCartView, itemCount }) => {
  return (
    <div className="cart-icon" onClick={ToggleCartView}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  ToggleCartView: () => dispatch(ToggleCartView()),
});
const mapStateToProps = ({ cart: {cartItems} }) => ({
  itemCount: cartItems.reduce((accumulatedQuantity,cartItem)=> accumulatedQuantity + cartItem.quantity ,0)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
