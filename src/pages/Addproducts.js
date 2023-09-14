import React, { useState } from "react";
import Apicalls from "../DataProvider/Apicalls";
const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "Amritan",
    description: "Description",
    mrp: 150,
    price: 120,
    category: "Farming",
    imageUrl: "b11.avif",
    brand: "Agro Pean",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "mrp" || name == "price") {
      setProduct({
        ...product,
        [name]: parseInt(value),
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    Apicalls.handleAddProducts(product)
      .then((response) => {
        console.log("Product Add successfully", response.data);
      })
      .catch((error) => {
        console.error("Product Add failed", error);
      });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>MRP:</label>
          <input
            type="number"
            name="mrp"
            value={product.mrp}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
