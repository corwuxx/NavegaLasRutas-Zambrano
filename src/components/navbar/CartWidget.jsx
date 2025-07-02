import { BsCartFill } from "react-icons/bs";
import "./Navbar.css";
export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <BsCartFill />
      <span className="cart-count">0</span>
    </div>
  )
}