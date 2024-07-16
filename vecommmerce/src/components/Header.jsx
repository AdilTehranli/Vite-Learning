import React, { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <Link to='/'>
        <img src="./src/images/logo2.jpg" alt="" />
        </Link>
        <p>Tehranli</p>
      </div>

      <div className="flex-row">
        <input className="search-input" type="text" />
        <div>
            {
                theme ? <FaMoon className="icon" onClick={changeTheme}/>  : <CiLight className="icon" onClick={changeTheme} />
            }

        
          <CiShoppingBasket className="icon   " />
        </div>
      </div>
    </div>
  );
};

export default Header;
