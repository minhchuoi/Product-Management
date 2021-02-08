import './App.css';
import Top_products from './component/Top-products.js'
import Item from './component/Item.js'
import React, { useState } from 'react';

function App() {
  let [listItem, setListItem] = useState([
    { productName: 'Inovex Television', productCode: 'PRD-01', brand: 'Innovex', supplier: 'Innovex Pvt' },
    { productName: 'Plastic Chair 002', productCode: 'PRD-02', brand: 'Nika', supplier: 'Nikal' },
    { productName: 'Washing Machiness', productCode: 'PRD-03', brand: 'Piuv', supplier: 'Piuv' },
    { productName: 'Wasshing Fully Ab', productCode: 'PRD-04', brand: 'Reck', supplier: 'Reck Pbs' },
    { productName: 'Giner Medium prov', productCode: 'PRD-05', brand: 'Yons', supplier: 'Yonsop' }
  ]);

  // listItem.map((item, index));

  return (
    

    <div className="App container">
      <Top_products></Top_products>

      <table id="list-item">
        <tr>
          <th>Product Name</th>
          <th>Product Code</th>
          <th>Brand</th>
          <th>Supplier</th>
          <th className="action">Actions</th>
        </tr>
        {
          listItem.length>0 && listItem.map((item, index) =>
          <Item 
          key={item.productCode}
          productName={item.productName}
          productCode={item.productCode}
          brand={item.brand}
          supplier={item.supplier}
        ></Item>)}
      </table>


    </div>
  );
}

export default App;
