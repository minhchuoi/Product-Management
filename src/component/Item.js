import '../App.css';

function Item() {
  return (
    <div>
      <table id="list-item">
        <tr>
          <th>Product Name</th>
          <th>Product Code</th>
          <th>Brand</th>
          <th>Supplier</th>
          <th className="action">Actions</th>
        </tr>
        <tr>
          <td>LG 245s</td>
          <td>PRD-01</td>
          <td>Inovex</td>
          <td>Inovex  </td>
          <td className="action">
            <a><img src="https://www.flaticon.com/svg/vstatic/svg/189/189664.svg?token=exp=1612716225~hmac=05eddf810dffb3a76328dfa7d0673135" height="22px"></img></a>
            <a><img src="https://www.flaticon.com/svg/vstatic/svg/3616/3616796.svg?token=exp=1612716800~hmac=6c98f89515f4b97fa083d16b0c1282cb" height="22px"></img></a>
            <a><img src="https://www.flaticon.com/svg/vstatic/svg/1214/1214926.svg?token=exp=1612716897~hmac=31fcb3e0887b27fe6dc54c875c6ca6e7" height="22px"></img></a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Item;
