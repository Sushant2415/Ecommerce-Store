const Api_Url = "https://fakestoreapi.com/products";

export async function getproducts() {
  const response = await fetch(Api_Url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();
  return products;
}
