import regImage from "../assets/register.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: " ",
    email: " ",
    password: " "
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Sign Up Successful")
    sessionStorage.setItem("user", JSON.stringify(form));
    setInterval(() => {
      window.location = "/login-page";
    }, 2000);
  };

  return (
    <div className="grid--12 register">
      <ToastContainer />
      <img src={regImage} alt="sandwich" />

      <div className="login__input">
        <h1>Welcome to Lilies!</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your First Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email address"
            onChange={handleChange}
          />

          <div className="login__flex">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Your Password"
              onChange={handleChange}
            />
            <p onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "hide" : "show"}
            </p>
          </div>

          <button className="btn">SIGN UP</button>
        </form>

        <div className="register__footer">
          <p>
            Already have an account. <Link to="/login-page">LOGIN</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
