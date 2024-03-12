
import rightArrow from "../assets/images/right.svg";
import adminLoginIcon from "../assets/images/adminLoginIcon.png";
import AppCSS from "../CSS/App.module.css";
import { useState } from "react";
import useImages from "../hooks/useImages";
const AdminLogin = ({appLogo}) => {
  const [adminData, setAdminData] = useState({
    userId: "",
    password: "",
  });
  const handleChange = (event) => {
    setAdminData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const imageURL=useImages();
  console.log(appLogo);
  // console.log(appLogo);
  return (
    <>
      <div className={`${AppCSS.loginContainer}`} name="loginContainer">
        <div className={AppCSS.logo}>
          <img src={appLogo} alt="" />
        </div>
        <div className={AppCSS.loginIcon}>
          <img src={adminLoginIcon} alt="" />
          <label>Admin Login</label>
        </div>
        <div className={AppCSS.emailBox}>
          <input
            type="text"
            name="userId"
            placeholder="userId"
            autoComplete="off"
            value={adminData.userId}
            onChange={handleChange}
          />
          <span className={AppCSS.borderAnimation}></span>
        </div>
        <div className={AppCSS.passwordBox}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={adminData.password}
            onChange={handleChange}
          />
          <span className={AppCSS.borderAnimation}></span>
        </div>
        <div className={AppCSS.submitBox}>
          <input type="submit" value="Login" />
          <img src="assets/images/right.svg" alt="" />
        </div>
        <div className={AppCSS.forgetPasswordAdmin}>
          <a
            className={AppCSS.link}
            name="adminLoginContainer_forgetPasswordContainer">
            forget password
          </a>
          <a className={AppCSS.link} name="adminLoginContainer_loginContainer">
            user login
          </a>
        </div>
      </div>
      {/* Forget password container */}
    </>
  );
};
export default AdminLogin;
