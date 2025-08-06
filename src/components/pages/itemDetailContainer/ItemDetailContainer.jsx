import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productsMock } from "../../../productsMock";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = productsMock.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

 if (!product) return <div className="loading">No hay productos para mostrar</div>; //Si no hay productos dirá "No hay productos para mostrar"

  return (
    <section className="product-detail">
      <div className="detail-image-container">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p className="stock">Disponibles: {product.stock}</p>
        <button className="add-to-cart">Añadir al carrito</button>
      </div>
    </section>
  );
};