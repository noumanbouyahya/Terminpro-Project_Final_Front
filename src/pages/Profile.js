import React from "react";

import {useAtom} from "jotai";
import {Navigate} from "react-router-dom";

import userAtom from "../components/atoms/userAtom";
import ProfileComp from "../components/pages/Profile/ProfileComp";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import "./profile.css";

export default function Profile() {
  const [user] = useAtom(userAtom);

  if (user.type === "admin") {
    return (
      <Navigate
        to={"/admin"}
        replace={true}
      />
    );
  }

  return (
    <div>
      <Header />
      <ProfileComp />
      <Footer />
    </div>
  );
}
