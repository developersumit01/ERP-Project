
import rightArrow from "../assets/images/right.svg";
import adminLoginIcon from "../assets/images/adminLoginIcon.png";
import AppCSS from "../CSS/App.module.css";
import { useState } from "react";
import backgroundImage from "../assets/images/university-image.jpg";
import useImages from "../hooks/useImages";
import { Link } from "react-router-dom";
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
    
    <main className={AppCSS.main}>
    <div
          className={AppCSS.background}
          style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className={`${AppCSS.loginContainer}`}>
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
          <Link
          to={'/forget password'}
            className={AppCSS.link}
            name="adminLoginContainer_forgetPasswordContainer">
            forget password
            </Link>
          <Link to={'/'} className={AppCSS.link} name="adminLoginContainer_loginContainer">
            user login
            </Link>
          </div>
        </div>
        {/* Forget password container */}
      </main>
    </>
  );
};
export default AdminLogin;
