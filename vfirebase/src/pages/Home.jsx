import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase";

const Home = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (useCradential) => {
      if (useCradential) {
        setUser(useCradential.email);
      }
    });
  }, []);
  return <div>Hello {user}</div>;
};

export default Home;
