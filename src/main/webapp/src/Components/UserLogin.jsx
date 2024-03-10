import appLogo from "../assets/images/Logo.svg";
import loginIcon from "../assets/images/login-icon.png";
import rightArrow from "../assets/images/right.svg";
import backgroundImage from "../assets/images/university-image.jpg";
import AppCSS from "../CSS/App.module.css";
import { useState } from "react";
import AdminLogin from "./AdminLogin";

function UserLogin() {
  const [loginData, setLoginData] = useState({
    userId: "",
    password: "",
  });
  const handleChange = (event) => {
    setLoginData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <main className={AppCSS.main}>
        <div
          className={AppCSS.background}
          style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        (
        <div className={`${AppCSS.loginContainer}`} name="loginContainer">
          <div className={AppCSS.logo}>
            <img src={appLogo} alt="" />
          </div>
          <div className={AppCSS.loginIcon}>
            <img src={loginIcon} alt="" />
            <label>User Login</label>
          </div>
          <div className={AppCSS.emailBox}>
            <input
              type="text"
              name="userId"
              placeholder="User Id"
              autocomplete="off"
              value={loginData.userId}
              onChange={handleChange}
            />
            <span className={AppCSS.borderAnimation}></span>
          </div>
          <div className={AppCSS.passwordBox}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
            />
            <span className={AppCSS.borderAnimation}></span>
          </div>
          <div className={AppCSS.submitBox}>
            <input type="submit" value="Login" />
            <img src={rightArrow} alt="" />
          </div>
          <div className={AppCSS.forgetPasswordAdmin}>
            <a
              className={AppCSS.link}
              name="loginContainer_forgetPasswordContainer">
              forget password
            </a>
            <a
              className={AppCSS.link}
              name="loginContainer_adminLoginContainer">
              admin login
            </a>
          </div>
        </div>
        )
      </main>
    </>
  );
}

export default UserLogin;
