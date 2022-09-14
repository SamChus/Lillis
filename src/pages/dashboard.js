import Sidenav from "../components/sidenav";
import avatar from "../assets/avatar.png";
import FoodCard from "../components/food-card";

const Dashboard = ({
  productItem,
  cartItem,
  handleDelete,
  handleClick,
  handleDetails,
  details,
  count,
  handleIncrement,
  handleDecrement,
}) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="dashboard">
      <div className="flex--box dash__header">
        <div className="dash__greeting">
          <h1>{`Hello ${user.name}`}</h1>
          <p>Your are welcome</p>
        </div>
        <div>
          <img src={avatar} alt="profile" className="avatar" />
        </div>
      </div>
      <Sidenav cartItem={cartItem} handleDelete={handleDelete} count={count}/>
      <FoodCard
        productItem={productItem}
        handleClick={handleClick}
        handleDetails={handleDetails}
        details={details}
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default Dashboard;
