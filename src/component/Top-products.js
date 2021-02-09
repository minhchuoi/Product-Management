import '../App.css';
import AddProduct from './Add-product'
import React, { useState } from 'react';


function Top_products(props) {
  
  // const [showHide, setShowHide] = useState(false);

  // const hideComponent = () => {
  //   setShowHide(true)
  // };

  return (

    <div>
      <div className="top row">
        <div className='col-6'>
          <button type="button" className="btn btn-primary" onClick={props.hideComponent} >ADD NEW PRODUCT</button>
        </div>
        <div className='search container-fluid col-6'>
          <input type="text" className="" placeholder="Search" />
          <a><img src="https://www.flaticon.com/svg/vstatic/svg/622/622669.svg?token=exp=1612713866~hmac=b0f406679cc0bfa4113fddbf205ae831" height="30" /></a>
          <div className="solid"></div>
        </div>
      </div>
      {/* {showHide && <AddProduct/>} */}
    </div>
  );
}
export default Top_products;
