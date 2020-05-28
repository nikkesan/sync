import React from "react";
import { FaArrowRight } from "react-icons/fa";
import circleChecked from "../../Assets/circleChecked.svg";
import circleNotChecked from "../../Assets/circleNotChecked.svg";

export const MainContent = () => {
  const [checked, setChecked] = React.useState("personal");
  return (
    <div className="main_content">
      {/* Section 1: Main page header and subheader/tagline */}
      <section>
        <h1 className="header">Online Login</h1>
        <h3 className="subheader">
          Enter your mobile number to<br></br>log in to your account
        </h3>
      </section>

      {/* Section 2:  Select bank account options */}
      <section>
        <form action="#" className="options_container">
          <div>
            <div className="options">
              <input type="hidden" name="acc_type" value={checked}></input>
              <div
                className={
                  "acc_label" + (checked === "personal" ? " active" : "")
                }
                onClick={() => {
                  setChecked("personal");
                }}
              >
                Personal
                {checked === "personal" ? (
                  <img
                    alt="checked circle"
                    className="circle_option"
                    src={circleChecked}
                  ></img>
                ) : (
                  <img
                    alt="not-checked circle"
                    className="circle_option"
                    src={circleNotChecked}
                  ></img>
                )}
              </div>
            </div>
            <div className="options">
              <div
                className={
                  "acc_label" + (checked === "business" ? " active" : "")
                }
                onClick={() => {
                  setChecked("business");
                }}
              >
                Business
                {checked === "business" ? (
                  <img
                    alt="checked circle"
                    className="circle_option"
                    src={circleChecked}
                  ></img>
                ) : (
                  <img
                    alt="not-checked circle"
                    className="circle_option"
                    src={circleNotChecked}
                  ></img>
                )}
              </div>
            </div>
          </div>
          <div className="btn_container">
            <button className="btn btn_continue">
              Continue
              <FaArrowRight className="img_arrow_right" />
            </button>
          </div>
        </form>
      </section>

      {/* Section 3: Account sign up section */}
      <section>
        <p className="sign_up">
          Haven't got an account yet?
          <button className="btn btn_sign_up">Sign up</button>
        </p>
      </section>
    </div>
  );
};
