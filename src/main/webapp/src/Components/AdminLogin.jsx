import appLogo from "../assets/images/Logo.svg";
import rightArrow from "../assets/images/right.svg";
import adminLoginIcon from "../assets/images/adminLoginIcon.png";
import AppCSS from "../CSS/App.module.css";
import { useState } from "react";
const AdminLogin = () => {
  const [adminData,setAdminData]=useState({
    userId:'',
    password:'',
  });
  const handleChange=(event)=>{
    setAdminData((prev)=>({
      ...prev,
      [event.target.name]:event.target.value,
    }))
  }
  return (
    <>
      <div
            className={`${AppCSS.loginContainer}`}
            name="loginContainer">
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
                autocomplete="off"
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
              <img src={rightArrow} alt="" />
            </div>
            <div className={AppCSS.forgetPasswordAdmin}>
              <a
              className={AppCSS.link}
                
                name="adminLoginContainer_forgetPasswordContainer">
                forget password
              </a>
              <a
              className={AppCSS.link}
                name="adminLoginContainer_loginContainer"
                >
                user login
              </a>
            </div>
          </div>
          {/* Forget password container */}
          <div
            className={`${AppCSS.loginContainer} ${cardAnimation.forgetPasswordContainer} ${scaleAnimation.forgetPasswordContainer}`}
            name="forgetPasswordContainer">
            <div className={AppCSS.logo}>
              <img src={appLogo} alt="" />
            </div>
            <div className={AppCSS.loginIcon}>
              <img src={loginIcon} alt="" />
              <label>Forget Password</label>
            </div>
            <div className={AppCSS.emailBox}>
              <input
                type="text"
                name="userId"
                placeholder="User Id"
                autocomplete="off"
              />
              <span className={AppCSS.borderAnimation}></span>
            </div>
            {/* <!-- This will display in frist click --> */}
            {/* <!-- <div className="passwordBox">
                <input type="text" id="otp" placeholder="Enter OTP" autocomplete="off">
                <span className="borderAnimation"></span>
            </div> --> */}
            {/* <!-- This will display in second click --> */}
            {/* <!-- <div className="emailBox">
                <input type="text" id="password" placeholder="Password">
                <span className="borderAnimation"></span>
            </div>
            <div className="passwordBox">
                <input type="text" id="comfirm password" placeholder="Comfirm Password">
                <span className="borderAnimation"></span>
            </div> --> */}
            {/* <!-- In third click all process will complete --> */}
            <div className={AppCSS.submitBox}>
              {/* <!-- 
                    first click -> send OTP
                    second click -> verify OTP
                    third click -> change password
                 --> */}
              <input type="submit" value="Forget Password" />
              <img src={rightArrow} alt="" />
              <img
                src="/Web Projects With Java/ERP Portal/src/main/webapp/images/right.svg"
                alt=""
              />
            </div>
            <div className={AppCSS.forgetPasswordAdmin}>
              <a
                className={AppCSS.link}
                onClick={setAnimation}
                name="forgetPasswordContainer_loginContainer">
                user login
              </a>
              <a
                className={AppCSS.link}
                onClick={setAnimation}
                name="forgetPasswordContainer_adminLoginContainer">
                admin login
              </a>
            </div>
          </div>
    </>

  );
};
export default AdminLogin;
