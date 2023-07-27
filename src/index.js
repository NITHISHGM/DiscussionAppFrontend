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
import DiscussionDetails from "./components/DiscussionDetails";
import CreateDiscussion from "./components/CreateDiscussion";
import DiscussionList from "./components/DiscussionList";
export const ROOTURL = "https://good-stockings-frog.cyclic.app/";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/discussionList"
            element={
              <Full>
                {" "}
                <DiscussionList />
              </Full>
            }
          />
          <Route
            path="/discussionDetails"
            element={
              <Full>
                {" "}
                <DiscussionDetails />
              </Full>
            }
          />
          <Route
            path="/createDiscussion"
            element={
              <Full>
                <CreateDiscussion />
              </Full>
            }
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
