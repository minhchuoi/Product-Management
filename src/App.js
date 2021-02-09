import './App.css';
import Top_products from './component/Top-products.js'
import Item from './component/Item.js'
import React, { useState } from 'react';
import AddProduct from './component/Add-product'

function App() {
  const [listItem, setListItem] = useState([
    { productName: 'Inovex Television', productCode: 'PRD-01', brand: 'Innovex', supplier: 'Innovex Pvt' },
    { productName: 'Plastic Chair 002', productCode: 'PRD-02', brand: 'Nika', supplier: 'Nikal' },
    { productName: 'Washing Machiness', productCode: 'PRD-03', brand: 'Piuv', supplier: 'Piuv' },
    { productName: 'Wasshing Fully Ab', productCode: 'PRD-04', brand: 'Reck', supplier: 'Reck Pbs' },
    { productName: 'Giner Medium prov', productCode: 'PRD-05', brand: 'Yons', supplier: 'Yonsop' }
  ]);

  const [showHide, setShowHide] = useState(false);

  const hideComponent = () => {
    setShowHide(true)
  };

  const addItem = () =>{
    let prName = document.getElementById("product-name").value.trim();
    let prCode = document.getElementById("product-code").value.trim();
    let brand = document.getElementById("brand").value.trim();
    let supplier = document.getElementById("supplier").value.trim();
    
    setListItem([
    { productName: prName, productCode: prCode, brand: brand, supplier: supplier },
    ...listItem
    ])


  }

  return (
    <div className="App container">
      <Top_products hideComponent={hideComponent}></Top_products>
      {showHide && <AddProduct addItem={addItem}/>}
      <table id="list-item">
        <tr>
          <th>Product Name</th>
          <th>Product Code</th>
          <th>Brand</th>
          <th>Supplier</th>
          <th className="action">Actions</th>
        </tr>
        {
          listItem.length > 0 && listItem.map((item, index) =>
            <Item
              key={index}
              item={item}
            ></Item>)}
      </table>


    </div>
  );
}

export default App;
