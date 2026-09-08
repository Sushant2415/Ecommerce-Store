import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/ProductApi";
const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <main className="product-details">
      <div className="product-details__image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-details__image"
        />
      </div>

      <div className="product-details__content">
        <p className="product-details__category">{product.category}</p>

        <h1 className="product-details__title">{product.title}</h1>

        <div className="product-details__rating">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </div>

        <p className="product-details__price">${product.price}</p>

        <p className="product-details__description">{product.description}</p>

        <div className="product-details__quantity">
          <button
            type="button"
            onClick={() =>
              setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))
            }
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            onClick={() =>
              setQuantity((currentQuantity) => currentQuantity + 1)
            }
          >
            +
          </button>
        </div>

        <button type="button" className="product-details__cart-button">
          Add to Cart
        </button>
      </div>
    </main>
  );
};

export default ProductDetails;
