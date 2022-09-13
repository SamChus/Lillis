import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing-page";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import "./style.css";
import FoodData from "./db.json";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const productItem = FoodData;
  const [cart, setCart] = useState([]);
  const [details, setDetails] = useState([]);
  const [count, setCount] = useState(0);

  const handleIncrement = (product) => {
    const itemCount = productItem.filter((item) => item.id === product.id);
    setCount(itemCount.map((c) => c.count++));
  };

  const handleDecrement = (product) => {
    const itemCount = productItem.filter((item) => item.id === product.id);
    setCount(itemCount.map((c) => c.count--));
  };

  const handleClick = (product) => {
    let productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      setCart([...cart]);
      toast.success("Item already exit");
    } else {
      setCart([...cart, { ...product }]);
    }
  };

  const handleDetails = (id) => {
    setDetails(productItem.filter((item) => item.id === id));
  };

  const handleDelete = (id) => {
    const removeItem = cart.filter((item) => item.id !== id);
    setCart(removeItem);
  };

  return (
    <Router>
      <div className="App">
        <Route exact path={"/"}>
          <LandingPage />
        </Route>
        <Route path={"/login-page"}>
          <LoginPage />
        </Route>
        <Route path={"/register-page"}>
          <RegisterPage />
        </Route>
        <Route path={"/dashboard"}>
          <ToastContainer />
          <Dashboard
            productItem={productItem}
            cartItem={cart}
            handleDelete={handleDelete}
            handleClick={handleClick}
            handleDetails={handleDetails}
            details={details}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            count={count}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
