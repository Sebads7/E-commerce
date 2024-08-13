import { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-active");
    e.target.classList.toggle("open");
    console.log("clicked");
  };

  return (
    <div className="navbar">
      <img
        onClick={dropdown_toggle}
        className="dropdown-icon"
        src={dropdown_icon}
        alt=""
      />
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      {/* Mobil menu click */}

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop </Link> {menu === "shop" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Men's </Link> {menu === "mens" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens">Women's </Link>{" "}
          {menu === "womens" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids </Link>
          {menu === "kids" ? <hr /> : <> </>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            {" "}
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login </button>
          </Link>
        )}

        <div className="cart-count">
          <Link to="/cart">
            <img src={cart_icon} alt="cart-icon" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
