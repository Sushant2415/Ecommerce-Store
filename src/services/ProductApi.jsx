const Api_Url = "https://fakestoreapi.com/products";

export async function getProducts() {
  const response = await fetch(Api_Url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();
  return products;
}

export async function getProductById(id) {
  const response = await fetch(`${Api_Url}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await response.json();

  return product;
}
