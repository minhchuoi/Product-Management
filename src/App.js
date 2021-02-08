import './App.css';
import Top_products from './component/Top-products.js'
import Item from './component/Item.js'

function App() {
  return (
    <div className="App container">
      <Top_products></Top_products>


      <div class="deleted form-check form-switch">
        <input class="check form-check-input" type="checkbox" id="flexSwitchCheckDefault" height="25px"/>
        <label class="check-name form-check-label" for="flexSwitchCheckDefault">Deleted Product </label>
      </div>

      <div className="list row">
        <div className="col-6 row">
          <div className="col-8">
            Product Name
          </div>
          <div className= "col-4">
            Product Code
          </div>
        </div>
        <div className="col-6 row">
          <div className="col-4">
            Brand
          </div>
          <div className="col-4">
            Supplier
          </div>
          <div className="actions col-4">
            Actions
          </div>
        </div>
      </div>
      <div className="solid"></div>

      <Item></Item>
      <Item></Item>
      <Item></Item>

     
    </div>
  );
}

export default App;
