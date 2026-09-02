import ProductCard from "./ProductCard";
const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
