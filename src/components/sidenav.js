import logo from "../assets/logo.svg";
import icon1 from "../assets/dash-1.svg";
import icon2 from "../assets/dash-2.svg";

import Cart from "./cart";
import Order from "./orders";

const Sidenav = ({ cartItem, handleDelete, count}) => {
  return (
    <div className="dash__sidenav">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1 className="logo-text">Lilies</h1>
      </div>
      <button className="dash__btn">
        <img src={icon1} alt="dashboard" />
        Dashboard
      </button>
      <button className="dash__btn">
        <img src={icon2} alt="profile" />
        Your Profile
      </button>
     <Order cartItem={cartItem} handleDelete={handleDelete} count={count}/>
      <Cart cartItem={cartItem} handleDelete={handleDelete} count={count}/>
    </div>
  );
};

export default Sidenav;
