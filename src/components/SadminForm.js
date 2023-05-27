import React, { useState } from 'react';

function SadminForm() {
  const [enteredId, setEnteredId] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('Electronic');

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const addProductHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      id: enteredId,
      price: enteredPrice,
      name: enteredName,
      category: enteredCategory
    };

    // console.log(enteredData);
    // Save the new item to localStorage
    const saveData = JSON.parse(localStorage.getItem(enteredCategory)) || [];
    localStorage.setItem(enteredCategory, JSON.stringify([...saveData, enteredData]));


    setEnteredId('');
    setEnteredPrice('');
    setEnteredName('');
    setEnteredCategory('');
  };

  return (
    <form onSubmit={addProductHandler}>
      <label>Product ID</label>
      <input
        type="number"
        value={enteredId}
        onChange={idChangeHandler}
      />

      <label>Selling Price</label>
      <input
        type="number"
        value={enteredPrice}
        onChange={priceChangeHandler}
      />

      <label>Product Name</label>
      <input
        type="text"
        value={enteredName}
        onChange={nameChangeHandler}
      />

      <label>Choose Category</label>
      <select value={enteredCategory} onChange={categoryChangeHandler}>
        <option value="electronic">Electronic</option>
        <option value="food">Food</option>
        <option value="skinCare">SkinCare</option>
      </select>

      <button type="submit">Add Product</button>
    </form>
  );
}

export default SadminForm;