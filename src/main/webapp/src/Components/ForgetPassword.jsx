import AppCSS from '../CSS/App.module.css';
import appLogo from "../assets/images/Logo.svg";
import loginIcon from "../assets/images/login-icon.png";
import rightArrow from "../assets/images/right.svg";
const ForgetPassword = () => {
  return (
    <>
      <div
        className={`${AppCSS.loginContainer}`}
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
            name="forgetPasswordContainer_loginContainer">
            user login
          </a>
          <a
            className={AppCSS.link}
            name="forgetPasswordContainer_adminLoginContainer">
            admin login
          </a>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
