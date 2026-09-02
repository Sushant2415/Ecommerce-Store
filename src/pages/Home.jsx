import React, { useState } from "react";
import { useEffect } from "react";
import { getproducts } from "../services/ProductApi";
import ProductGrid from "../components/ProductGrid";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data = await getproducts();
        // console.log(data)
        setProducts(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) {
    return <p>Loading Products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }
  return (
    <main>
      <h1>Our Products</h1>
      <ProductGrid products={products}/>

    </main>
  );
};

export default Home;
