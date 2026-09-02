import React from "react";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
      </div>
      <div className="product-card__content">
        <p className="product-card__category">{product.category}</p>
        <h2 className="product-card__title">{product.title}</h2>
        <div className="product-card__rating">
          ⭐{product.rating.rate} ({product.rating.count})
        </div>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price}</span>
          <button type="button">Add to Cart</button>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
