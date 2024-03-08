import appLogo from "../assets/images/Logo.svg";
import rightArrow from "../assets/images/right.svg";
import adminLoginIcon from "../assets/images/adminLoginIcon.png";
import AppCSS from "../CSS/App.module.css";
const AdminLogin = ({ cardAnimation, scaleAnimation, setAnimation }) => {
  return (
    <>
      <div
            className={`${AppCSS.loginContainer} ${cardAnimation.loginContainer} ${scaleAnimation.loginContainer}`}
            name="loginContainer">
            <div className={AppCSS.logo}>
              <img src={appLogo} alt="" />
            </div>
            <div className={AppCSS.loginIcon}>
              <img src={adminLoginIcon} alt="" />
              <label>User Login</label>
            </div>
            <div className={AppCSS.emailBox}>
              <input
                type="text"
                id="rollNo"
                placeholder="Roll No"
                autocomplete="off"
              />
              <span className={AppCSS.borderAnimation}></span>
            </div>
            <div className={AppCSS.passwordBox}>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={""}
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
                onClick={setAnimation}
                name="adminLoginContainer_forgetPasswordContainer">
                forget password
              </a>
              <a
              className={AppCSS.link}
                name="adminLoginContainer_loginContainer"
                onClick={setAnimation}>
                admin login
              </a>
            </div>
          </div>
    </>
  );
};
export default AdminLogin;
