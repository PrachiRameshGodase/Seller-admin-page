import React, { useState, useEffect } from "react";
import "./App.css";
import SadminForm from "./components/SadminForm";
import SadminList from "./components/SadminList";


function App() {
  const [adminData, setAdminData] = useState([]);


  useEffect(() => {
    const storedData = Object.keys(localStorage).map((key) => {
      return {
      category: key,
      items: JSON.parse(localStorage.getItem(key)),
      };
    });
  
    setAdminData(storedData);
  }, []);
  
  

  const addAdminDataHandler = (enteredData) => {
    const {category} = enteredData;

    setAdminData((prevAdminData) => {
      const categoryData = { ...prevAdminData[category] };
      categoryData[enteredData.id.toString()] = enteredData;
    
      const updatedData = {
        ...prevAdminData,
        [category]: categoryData,
      };
        console.log(enteredData)
      // Update localStorage with the updatedData
      localStorage.setItem(enteredData.id.toString(), JSON.stringify(updatedData));

      return updatedData;
    });
  };

  const deleteAdminDataHandler = (category, enteredDataId) => {
    setAdminData((prevAdminData) => {
      const updatedCategory = { ...prevAdminData[category] };
      delete updatedCategory[enteredDataId];

      const updatedData = {
        ...prevAdminData,
        [category]: updatedCategory,
      };

      // Update localStorage with the updatedData
      localStorage.removeItem(enteredDataId)
     
      return updatedData;
    });
  };

// Convert adminData object into an array of categories for SadminList
  const adminDataArray = Object.entries(adminData).map(([category, items]) => ({
    category,
    items,
  }));
  
return (
    <div>
      <SadminForm onAddAdminData={addAdminDataHandler} />
      <SadminList items={adminDataArray} onDeleteAdminData={deleteAdminDataHandler} />
    </div>
  );
}

export default App;

