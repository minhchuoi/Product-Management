import '../App.css';

function AddProduct() {
  return (
    <div className="form-add">
      <h6>Product Name</h6>
      <input type="text" className="pruduct-name container" placeholder="Product Name"></input>
      <h6>Product Code</h6>
      <input className="pruduct-code container" placeholder="Product Code"></input>
      <h6>Product Brand</h6>
      <input className="brand container" placeholder="Brand"></input>
      <h6>Product Subblier</h6>
      <input className="supplier container" placeholder="Supplier"></input>
      <button type="button" class="btn btn-primary">Add Product</button>
    </div>
  );
}

export default AddProduct;
