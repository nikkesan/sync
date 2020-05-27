import React from "react";
import { ReactComponent as Logo_Sync } from "../Assets/Logo_Sync_(Black).svg";
import { ReactComponent as Logo_X } from "../Assets/Logo_X_(Fluorescent).svg";
import Laptop from "../Assets/laptop.png";

export const MainPage = () => {
  return (
    <>
      <Logo_Sync />
      <img src={Laptop} />
      <h1>Online Login</h1>
      <h2>Enter your mobile number to log into your account</h2>
      <form action="#">
        <label for="personal">Personal</label>
        <input
          type="radio"
          id="personal"
          name="account-type"
          value="personal"
        ></input>
        <label for="business">Business</label>
        <input
          type="radio"
          id="business"
          name="account-type"
          value="business"
        ></input>
        <button>Continue</button>
      </form>
      <p>
        Haven't got an account yet?<button>Sign up</button>
      </p>
      <Logo_X />
    </>
  );
};
