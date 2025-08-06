import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

export const CartWidget = () => {
  return (
    <Link to="/cart" className="cart-widget">
      <div className="cart-icon-container">
        <FaShoppingCart size={20} />
        <span className="cart-badge">5</span>
      </div>
    </Link>
  );
};