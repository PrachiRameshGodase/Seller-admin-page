import React from 'react';
import classes from "./SadminList.module.css"

function SadminList(props) {
  const deleteItemHandler = (categoryId, itemId) => {
    props.onDeleteAdminData(categoryId, itemId);
  };

  const renderItems = (category) => {
    const categoryData = props.items.find((adminCategory) => adminCategory.category === category);

    if (categoryData && categoryData.items && Object.keys(categoryData.items).length > 0) {
      return Object.entries(categoryData.items).map(([enteredDataId, admin]) => (
        <li key={enteredDataId}>
         {`Price:${admin.price}----Product-Name:${admin.name}----Product-Category:${admin.category}`} 
          <button className={classes.button} onClick={() => deleteItemHandler(categoryData.category, enteredDataId)}>
            Delete Order
          </button>
        </li>
      ));
    }

    return null;
  };

return (
    <div className={classes.list}>
      <h2 >Products</h2>
      <h3>Electronic Item</h3>
      <ul>{renderItems('electronic')}</ul>
      <h3>Food Item</h3>
      <ul>{renderItems('food')}</ul>
      <h3>Skincare Item</h3>
      <ul>{renderItems('skinCare')}</ul>
    </div>
  );
}

export default SadminList;
