import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { listProducts } from "./ProductsService";

const ProductsList = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProducts(data);
    })();
  }, [products]);

  if (products === null) {
    return <div>Loading ....</div>;
  }
  return (
    <Box>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </Box>
  );
};

export default ProductsList;
