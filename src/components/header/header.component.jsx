import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from '../cart-icon/cartIcon.component'
import CartDropDown from '../cart-dropdown/cartDropdown.component'

const Header = ({ currentUser ,hidden}) => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon/>
      </div>
      { hidden ? null:  <CartDropDown/>}
     
    </div>
  );
};
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
