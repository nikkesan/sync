import React from "react";
import Img_Laptop from "../Assets/laptop.png";
import Logo_Sync from "../Assets/Logo_Sync_(White).svg";
import Logo_X from "../Assets/Logo_X_(Fluorescent).svg";
import { MainText } from "./MainText/MainText";

export const MainPage = () => {
  return (
    <div className="main_page">
      <img alt="Sync logo" className="logo_sync" src={Logo_Sync}></img>
      <img alt="laptop" className="img_laptop" src={Img_Laptop} />
      <MainText />
      <img alt="X logo" className="logo_x" src={Logo_X}></img>
    </div>
  );
};
