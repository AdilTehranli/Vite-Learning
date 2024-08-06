import React, { useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../FireBase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("created user");
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth">
      <h3 className="auth-header"> Sign In / Sign Up</h3>
      <div className="input-div">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email adres"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Şifre"
        />
      </div>
      <div>
        <button>With Google</button>
        <button>Sign Up</button>
        <button onClick={register}>Sign in</button>
      </div>
    </div>
  );
};

export default Auth;
