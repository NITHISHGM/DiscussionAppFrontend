import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Full from "./Full";
import Login from "./loginRegister/Login";
import Register from "./loginRegister/Register";
import { store } from "./redux/store";
import "./styles/Style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/full" element={<Full />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
