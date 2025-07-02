import { CartWidget } from "./CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>LOGO Tienda</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};