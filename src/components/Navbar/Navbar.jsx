import React, { Profiler, useContext, useState } from 'react'
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, getTotalCartItem, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    window.location.reload();

  }
  return (
    <div className='navbar'>
      <Link to="/"> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</Link>
        <a href='#explore-menu' className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</a>
        <a href='#app-download' className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>Mobile App</a>
        <a href='#footer' className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}>{getTotalCartItem() === 0 ? <></> : getTotalCartItem()}</div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button>
          : <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar
