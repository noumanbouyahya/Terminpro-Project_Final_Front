import React from "react";

import InstitutionsComp from "../components/pages/institution/InstitutionsComp";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

import "./inst.css";

export default function Institutions() {
  return (
    <div>
      <Header />
      <InstitutionsComp />
      <Footer />
    </div>
  );
}
