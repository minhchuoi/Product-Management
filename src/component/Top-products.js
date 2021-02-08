import '../App.css';

function Top_products() {
  return (
    <div>
      <div className="top row">
        <div className='col-6'>
          <button type="button" className="btn btn-primary">ADD NEW PRODUCT</button>
        </div>
        <div className='search container-fluid col-6'>
          <input type="text" className="" placeholder="Search" />
          <a><img src="https://www.flaticon.com/svg/vstatic/svg/622/622669.svg?token=exp=1612713866~hmac=b0f406679cc0bfa4113fddbf205ae831" height="30" /></a>
          <div className="solid"></div>
        </div>
      </div>
    </div>
    );
}

export default Top_products;
