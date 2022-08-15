export const listProducts = async () => {
  const response = await fetch(`http://localhost:3000/products`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};

export const orderPackage = async () => {
  const response = await fetch(`http://localhost:3000/orders`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};
