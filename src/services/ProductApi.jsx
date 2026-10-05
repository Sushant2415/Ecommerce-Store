const API_URL = "https://dummyjson.com/products";

// DummyJSON ke product ko purane app ke format mein convert karna
function normalizeProduct(product) {
  return {
    ...product,
    image: product.thumbnail || product.images?.[0] || "",
    rating: {
      rate: product.rating ?? 0,
      count: product.reviews?.length ?? 0,
    },
  };
}

// Saare products fetch karna
export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products.map(normalizeProduct);
}

// Ek product ki details fetch karna
export async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await response.json();

  return normalizeProduct(product);
}
