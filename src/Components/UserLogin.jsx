import appLogo from "../assets/images/Logo.svg";
import loginIcon from "../assets/images/login-icon.png";
import rightArrow from "../assets/images/right.svg";
import backgroundImage from "../assets/images/university-image.jpg";
import adminLoginIcon from "../assets/images/adminLoginIcon.png";
import AppCSS from "../CSS/App.module.css";
import { useContext, useState } from "react";
import { Link, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { EditUserContext } from "../Context/EditUserContextProvider";

function UserLogin({ admin }) {
  // const user = {
  //   userId: "admin",
  //   password: "Sumit@123",
  // };
  const [auth, setAuth] = useContext(AuthContext);
const [editUser,setEditUser]=useContext(EditUserContext);
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

  const handleLogin = async () => {
    let URL = undefined;
    if (admin) {
      URL="https://school-erp-api.vercel.app/login/admin";
      // URL = "http://localhost:3000/login/admin";
    } else {
      URL="https://school-erp-api.vercel.app/login";
      // URL = "http://localhost:3000/login";
    }
    axios
      .post(URL, loginData)
      .then((response) => {
        const { data } = response;
        console.log("response", response);
        if (data) {
          setAuth(() => ({
            ...data,
          }));
          setEditUser({
            newUser:false,
            edit:false,
            role:data.role,
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const navigate=useNavigate()
  // if(auth.login&&admin){
  //   navigate("/")
  // }

  return (
    <>
      {auth.login ? (
        <Outlet />
      ) : (
        <main className={AppCSS.main}>
          <div
            className={AppCSS.background}
            style={{ backgroundImage: `url(${backgroundImage})` }}></div>
          <div className={`${AppCSS.loginContainer}`} name="loginContainer">
            <div className={AppCSS.logo}>
              <img src={appLogo} alt="" />
            </div>
            <div className={AppCSS.loginIcon}>
              {admin ? (
                <>
                  <img src={adminLoginIcon} alt="" />
                  <label>Admin Login</label>
                </>
              ) : (
                <>
                  <img src={loginIcon} alt="" />
                  <label>User Login</label>
                </>
              )}
            </div>
            <div className={AppCSS.emailBox}>
              <input
                type="text"
                name="userId"
                placeholder="User Id"
                autoComplete="off"
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
              <input type="submit" value="Login" onClick={handleLogin} />
              <img src={rightArrow} alt="" />
            </div>
            <div className={AppCSS.forgetPasswordAdmin}>
              <Link
                to={"/forget password"}
                className={AppCSS.link}
                name="loginContainer_forgetPasswordContainer">
                forget password
              </Link>
              {admin ? (
                <Link
                  to={"/"}
                  className={AppCSS.link}
                  name="adminLoginContainer_loginContainer">
                  user login
                </Link>
              ) : (
                <Link
                  to={"/admin"}
                  className={AppCSS.link}
                  name="loginContainer_adminLoginContainer">
                  admin login
                </Link>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default UserLogin;
