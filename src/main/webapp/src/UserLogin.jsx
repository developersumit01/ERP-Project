import appLogo from "./assets/images/Logo.svg";
import loginIcon from "./assets/images/login-icon.png";
import rightArrow from "./assets/images/right.svg";
import backgroundImage from "./assets/images/university-image.jpg";
import "./App.css";
import "./index.css";
import { useState } from "react";
import AdminLogin from "./AdminLogin";

function UserLogin() {
  const [cardAnimation, setCardAnimation] = useState({
    loginContainer: "",
    adminLoginContainer: "",
    forgetPasswordContainer: "",
  });
  const [scaleAnimation, setScaleAnimation] = useState({
    loginContainer: "",
    adminLoginContainer: "",
    forgetPasswordContainer: "",
  });
  const [displayCard, setDisplayCard] = useState("loginContainer");
  const setAnimation = (event) => {
    let name = event.target.name.split("_");
    // setCardAnimation("card-animation");
    setCardAnimation((prev) => ({
      ...prev,
      [name[0]]: "card-animation",
    }));
    setTimeout(() => {
      removeCardAnimation(name);
    }, 2000);
  };
  const removeCardAnimation = (arr) => {
    setCardAnimation((prev) => ({
      ...prev,
      [arr[0]]: "",
    }));
    setDisplayCard(arr[1]);
    setScaleAnimation((prev) => ({
      ...prev,
      [arr[1]]: "scale-animation",
    }));
  };

  return (
    <>
      <main className="main">
        <div
          className="background"
          style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        {displayCard == "loginContainer" ? (
          <div
            className={`login-container ${cardAnimation.loginContainer} ${scaleAnimation.loginContainer}`}
            name="loginContainer">
            <div className="logo">
              <img src={appLogo} alt="" />
            </div>
            <div className="login-icon">
              <img src={loginIcon} alt="" />
              <label>User Login</label>
            </div>
            <div className="email-box">
              <input
                type="text"
                id="rollNo"
                placeholder="Roll No"
                autocomplete="off"
              />
              <span className="border-animation"></span>
            </div>
            <div className="password-box">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={""}
              />
              <span className="border-animation"></span>
            </div>
            <div className="submit-box">
              <input type="submit" value="Login" />
              <img src={rightArrow} alt="" />
            </div>
            <div className="forget-password-admin">
              <a
              className="link"
                onClick={setAnimation}
                name="loginContainer_forgetPasswordContainer">
                forget password
              </a>
              <a
              className="link"
                name="loginContainer_adminLoginContainer"
                onClick={setAnimation}>
                admin login
              </a>
            </div>
          </div>
        ) : displayCard == "adminLoginContainer" ? (
          <AdminLogin cardAnimation={cardAnimation} scaleAnimation={scaleAnimation} setAnimation={setAnimation}/>
        ) : (
          <div
            className={`login-container ${cardAnimation.forgetPasswordContainer} ${scaleAnimation.forgetPasswordContainer}`}
            name="forgetPasswordContainer">
            <div class="logo">
              <img src={appLogo} alt="" />
            </div>
            <div class="login-icon">
              <img src={loginIcon} alt="" />
              <label>Forget Password</label>
            </div>
            <div class="email-box">
              <input
                type="text"
                id="rollNo"
                placeholder="Roll No"
                autocomplete="off"
              />
              <span class="border-animation"></span>
            </div>
            {/* <!-- This will display in frist click --> */}
            {/* <!-- <div class="password-box">
                <input type="text" id="otp" placeholder="Enter OTP" autocomplete="off">
                <span class="border-animation"></span>
            </div> --> */}
            {/* <!-- This will display in second click --> */}
            {/* <!-- <div class="email-box">
                <input type="text" id="password" placeholder="Password">
                <span class="border-animation"></span>
            </div>
            <div class="password-box">
                <input type="text" id="comfirm password" placeholder="Comfirm Password">
                <span class="border-animation"></span>
            </div> --> */}
            {/* <!-- In third click all process will complete --> */}
            <div class="submit-box">
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
            <div className="forget-password-admin">
              <a
              className="link"
                onClick={setAnimation}
                name="forgetPasswordContainer_loginContainer">
                user login
              </a>
              <a
              className="link"
                onClick={setAnimation}
                name="forgetPasswordContainer_adminLoginContainer">
                admin login
              </a>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default UserLogin;
