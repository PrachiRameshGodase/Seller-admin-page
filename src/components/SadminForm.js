import React, { useState } from 'react';
import classes from "./SadminForm.module.css"
import Card from "./UI/Card"

function SadminForm(props) {
  const [enteredId, setEnteredId] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('electronic');

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

    props.onAddAdminData(enteredData);

    setEnteredId('');
    setEnteredPrice('');
    setEnteredName('');
  };

  return (
    <div className={classes.image}>
      <h1 className={classes.title}>SELLER ADMIN PAGE</h1>
     
        <form onSubmit={addProductHandler} >
          <Card className={classes.inputs}>

            <div className={classes.input}>
              <label>Product ID</label>
              <input
              type="number"
              value={enteredId}
              onChange={idChangeHandler}
              />
            </div>

            <div className={classes.input}>
              <label>Selling Price</label>
              <input
              type="number"
              value={enteredPrice}
              onChange={priceChangeHandler}
              />
            </div>

            <div className={classes.input}>
              <label>Product Name</label>
              <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
              />
            </div>

            <div className={classes.input}>
              <label>Choose Category</label>
              <select value={enteredCategory} onChange={categoryChangeHandler}>
              <option value="electronic">Electronic</option>
              <option value="food">Food</option>
              <option value="skinCare">SkinCare</option>
              </select>
            </div>

            <div className={classes.input}>
              <button type="submit">Add Product</button>
            </div>
        </Card>
      </form>
      
    </div>
  );
}

export default SadminForm;
