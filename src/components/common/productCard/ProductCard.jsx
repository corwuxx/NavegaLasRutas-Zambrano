import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({ product }) => {
  const { id, title, price, imageUrl } = product;

  return (
    <article className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <Link to={`/item/${id}`} className="detail-button">Ver detalles</Link>
      </div>
    </article>
  );
};