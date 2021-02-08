import './App.css';
import Top_products from './component/Top-products.js'
import Item from './component/Item.js'
import AddProduct from "./component/Add-product"

function App() {
  return (
    <div className="App container">
      <Top_products></Top_products>

      <Item></Item>


    </div>
  );
}

export default App;
