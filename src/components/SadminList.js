
import React, { useState, useEffect } from 'react';

function SadminList() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchData = () => {
      const electronicData = JSON.parse(localStorage.getItem('electronic')) || [];
      const foodData = JSON.parse(localStorage.getItem('food')) || [];
      const skincareData = JSON.parse(localStorage.getItem('skinCare')) || [];

    setData({
        electronic: electronicData,
        food: foodData,
        skinCare: skincareData
      });
      
    };

    fetchData();
  }, []);

  const deleteItemHandler = (category, index) => {
    // const saveData = JSON.parse(localStorage.getItem(category)) || [];
    const updatedData = data[category].filter((_, i) => i !== index);
    localStorage.setItem(category, JSON.stringify(updatedData));
    setData(prevState => ({
      ...prevState,
      [category]: updatedData
    }));
  };

  const renderItems = category => {
    const items = data[category] || [];
    return items.map((item, index) => (
      <li key={index}>
        {item.price} - {item.name} - {category}
        <button onClick={() => deleteItemHandler(category, index)}>
          Delete Order
        </button>
      </li>
    ));
  };

  

  

  
  return (
    <div>
      <h2>Products</h2>
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