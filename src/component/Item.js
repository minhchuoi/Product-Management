import '../App.css';

function Item(props) {
  return (
    
    <tr>
      <td>{props.item.productName}</td>
      <td>{props.item.productCode}</td>
      <td>{props.item.brand}</td>
      <td>{props.item.supplier}</td>
      <td className="action">
        <button><img src="https://www.flaticon.com/svg/vstatic/svg/3616/3616796.svg?token=exp=1612716800~hmac=6c98f89515f4b97fa083d16b0c1282cb" height="22px"></img></button>
        <button><img src="https://www.flaticon.com/svg/vstatic/svg/1214/1214926.svg?token=exp=1612716897~hmac=31fcb3e0887b27fe6dc54c875c6ca6e7" height="22px"></img></button>
      </td>
    </tr>
  );
}

export default Item;
