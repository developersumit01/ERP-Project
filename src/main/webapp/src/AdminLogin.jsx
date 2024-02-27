import appLogo from "./assets/images/Logo.svg";
import rightArrow from "./assets/images/right.svg";
import adminLoginIcon from "./assets/images/adminLoginIcon.png";
const AdminLogin = ({ cardAnimation, scaleAnimation, setAnimation }) => {
  return (
    <>
      <div
        className={`login-container ${cardAnimation.adminLoginContainer} ${scaleAnimation.adminLoginContainer}`}
        name="adminLoginContainer">
        <div className="logo">
          <img src={appLogo} alt="" />
        </div>
        <div className="login-icon">
          <img src={adminLoginIcon} alt="" />
          <label>Admin Login</label>
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
            name="adminLoginContainer_forgetPasswordContainer">
            forget password
          </a>
          <a
            className="link"
            name="adminLoginContainer_loginContainer"
            onClick={setAnimation}>
            user login
          </a>
        </div>
      </div>
    </>
  );
};
export default AdminLogin;
