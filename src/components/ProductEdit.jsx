import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct, deleteProduct } from "./FunctionService";

const ProductEdit = () => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: 0,
    description: "",
  });
  const navigate = useNavigate();
  const updateField = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    try {
      const { id } = await createProduct(form);
      navigate(`/products${id}`);
    } catch (e) {
      console.warn(e);
    }
  };
  const handleDelete = async () => {
    try {
      await deleteProduct(form.id);
      alert(`Delete ${form.name}`);
      navigate(`/products`);
    } catch (e) {
      console.warn(e);
      navigate(`/products`);
    }
  };
  return (
    <form className="ProductEdit">
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={form.id}
        onChange={({ target }) => updateField(target)}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={({ target }) => updateField(target)}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={({ target }) =>
          updateField({ name: target.name, value: parseInt(target.value, 10) })
        }
      />
      <Button type="button" variant="contained" onClick={handleCreate}>
        Create
      </Button>
      <Button type="button" variant="contained" onClick={handleDelete}>
        Delete
      </Button>
    </form>
  );
};

export default ProductEdit;
