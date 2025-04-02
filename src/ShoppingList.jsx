import React, { useState } from "react";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);

  const [productInput, setProductInput] = useState("");
  const [productQuantityInput, setproductQuantityInput] = useState(0);

  const addProductHandler = () => {
    if (productInput.trim() === "" || productQuantityInput < 1)
      return;
    setShoppingList([
      ...shoppingList,
      { name: productInput, quantity: productQuantityInput },
    ]);
      setProductInput("");
      setproductQuantityInput(0)
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>
            {item.name} X{item.quantity}{" "}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={productInput}
        placeholder="Enter the product name"
        onChange={(e) => setProductInput(e.target.value)}
      />

      <input
        type="number"
        value={productQuantityInput}
        placeholder="Quantity"
        min="1"
        onChange={(e) => setproductQuantityInput(e.target.value)}
      />

      <button onClick={addProductHandler}>Add product to list</button>
    </div>
  );
};

export default ShoppingList;
