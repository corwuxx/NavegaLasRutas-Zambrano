import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productsMock } from "../../../productsMock";
import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const filteredProducts = category
      ? productsMock.filter((product) => product.category === category)
      : [...productsMock].sort((a, b) => a.price - b.price); // Ordenar por precio si no hay categoría
    
    setProducts(filteredProducts);
  }, [category]);

  return (
    <section className="item-list-container">
      <h2 className="category-title">
        {category ? category.toUpperCase() : "TODOS LOS PRODUCTOS"}
      </h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};