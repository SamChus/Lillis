import { useState } from "react";
import loginImage from "../assets/login.png";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: " ",
    password: " ",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (
      loginData?.email === user?.email &&
      loginData?.password === user?.password
    ) {
      toast.success("Login Successful")
      setInterval(() => {
        window.location = "/dashboard";
      }, 1500);
    } else {
      toast.error("Pls create an account")
    }
  };

  return (
    <div className="grid--12 login">
      <ToastContainer />
      <img src={loginImage} alt="cooking" />

      <div className="login__input">
        <h1>Welcome Back!</h1>
        <form onSubmit={handleSubmit}>
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
          <button className="btn">LOGIN</button>
        </form>
        <div className="login__footer">
          <Link to={'/register-page'}>Create an account</Link>
          <Link to={'/register-page'}>Forgot password</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
