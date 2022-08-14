import { Buffer } from "buffer";

import React from "react";

import AvatarComp from "./AvatarComp";
import Logo from "./Logo";
import NavList from "./NavList";
import UnRegistered from "./UnRegistered";

import "./header.css";

export default function Header() {
  let token =
    localStorage.getItem("token") &&
    JSON.parse(
      Buffer.from(localStorage.getItem("token"), "base64")
        .toString("utf-8")
        .split("}")[1] + "}"
    );
  return (
    <div className="header">
      <Logo />
      <NavList />
      {localStorage.getItem("token") ? (
        <AvatarComp name={token.firstName + " " + token.lastName} />
      ) : (
        <UnRegistered />
      )}
    </div>
  );
}
