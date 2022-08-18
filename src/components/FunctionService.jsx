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

export const createProduct = async (payload) => {
  const response = await fetch(`http://localhost:3000/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error("Something went wrong");
};

export const deleteProduct = async (id) => {
  const response = fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error("Something went wrong");
};