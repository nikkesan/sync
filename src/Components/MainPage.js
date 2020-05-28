import React from "react";
import Logo_Sync from "../Assets/Logo_Sync_(White).svg";
import Logo_X from "../Assets/Logo_X_(Fluorescent).svg";
import { MainContent } from "./MainContent/MainContent";

export const MainPage = () => {
  return (
    <div className="main_page">
      <img alt="Sync logo" className="logo_sync" src={Logo_Sync}></img>
      <MainContent />
      <img alt="X logo" className="logo_x" src={Logo_X}></img>
    </div>
  );
};
