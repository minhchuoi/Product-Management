import '../App.css';
import React, { useState } from 'react';

function AddProduct(props) {
  // const [listItem, setListItem] = useState([
  //   { productName: '', productCode: '', brand: '', supplier: '' }
  // ]);
  // const addItem = () =>{
  //   let prName = document.getElementById("product-name").value.trim();
  //   let prCode = document.getElementById("product-code").value.trim();
  //   let brand = document.getElementById("brand").value.trim();
  //   let supplier = document.getElementById("supplier").value.trim();
    
  //   setListItem=[
  //   { productName: {prName}, productCode: {prCode}, brand: {brand}, supplier: {supplier} },
  //   ...listItem
  //   ]


  // }

  return (
    <div className="form-add">
      <h6>Product Name</h6>
      <input type="text" id="product-name" className="pruduct-name container" placeholder="Product Name"></input>
      <h6>Product Code</h6>
      <input   type="text" id="product-code" className="pruduct-code container" placeholder="Product Code"></input>
      <h6>Product Brand</h6>
      <input  type="text" id="brand" className="brand container" placeholder="Brand"></input>
      <h6>Product Subblier</h6>
      <input type="text" id="supplier" className="supplier container" placeholder="Supplier"></input>
      <button type="button" className="btn btn-primary" onClick={props.addItem}>Add Product</button>
    </div>
  );
}

export default AddProduct;
