import React, { useEffect } from "react";

import { Provider } from "jotai";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/shared/ProtectedRoute";
import About from "./pages/About";
import Admin from "./pages/Admin/Admin";
import Contact from "./pages/Contact";
import Failure from "./pages/Failure";
import Home from "./pages/Home";
import Institution from "./pages/Institution";
import Institutions from "./pages/Institutions";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${"6LdjnIkgAAAAAOBJX4J2k-Ir3YPDu_Of32E7AT45"}`,
      function () {
        console.log("Script loaded!");
      }
    );
  }, []);

  return (
    <React.Fragment>
      <Provider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/institution/:id" element={<Institution />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/institutions" element={<Institutions />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/success" element={<Success />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/failure" element={<Failure />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
}
