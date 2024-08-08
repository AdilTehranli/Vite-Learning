import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../FireBase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    toast.success("Sign Out");
    setTimeout(() => {
      signOut(auth);
      navigate("/auth");
    }, 3000);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">FIREBASE</div>
        <div onClick={logout} className="navbar-right">
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default Navbar;
