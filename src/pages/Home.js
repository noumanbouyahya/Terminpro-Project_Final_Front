import React from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {BackTop} from "antd";

import Section1 from "../components/pages/home/Section1";
import Section2 from "../components/pages/home/Section2";
import Section3 from "../components/pages/home/Section3";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <BackTop>
        <div className="up">
          <ArrowUpwardIcon />
        </div>
      </BackTop>
      <Footer />
    </>
  );
}
