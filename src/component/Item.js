import '../App.css';

function Item() {
  return (
    <div>
       <div className="item row">
        <div className="col-6 row">
          <div className="col-8">
            LG 245s
          </div>
          <div className= "col-4">
            PRD-01
          </div>
        </div>
        <div className="col-6 row">
          <div className="col-4">
            Inovex
          </div>
          <div className="col-4">
            Inovex Pvt Limited
          </div>
          <div className="action col-4">
            <a><img src="https://www.flaticon.com/svg/vstatic/svg/189/189664.svg?token=exp=1612716225~hmac=05eddf810dffb3a76328dfa7d0673135" height="22px"></img></a>
            <a><img src="https://www.flaticon.com/svg/vstatic/svg/3616/3616796.svg?token=exp=1612716800~hmac=6c98f89515f4b97fa083d16b0c1282cb" height="22px"></img></a>
            <a><img src="https://www.flaticon.com/svg/vstatic/svg/1214/1214926.svg?token=exp=1612716897~hmac=31fcb3e0887b27fe6dc54c875c6ca6e7" height="22px"></img></a>
          </div>
        </div>
      </div>
      <div className="solid"></div>
    </div>
    );
}

export default Item;
