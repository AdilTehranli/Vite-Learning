import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./components/User/User";
import Update from "./components/Update";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route element={ <User />} path="/"/>
          <Route element={<Update />} path="update/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
