import React from "react";
import { FaArrowRight } from "react-icons/fa";
import circleChecked from "../../Assets/circleChecked.svg";
import circleNotChecked from "../../Assets/circleNotChecked.svg";

export const MainText = () => {
  const [checked, setChecked] = React.useState("personal");
  return (
    <div className="main_text">
      {/* Main page header and subheader/tagline */}
      <section>
        <h1 className="header">Online Login</h1>
        <h3 className="subheader">
          Enter your mobile number to log in to your account
        </h3>
      </section>

      {/* Select bank account options */}
      <section>
        <form action="#">
          <input type="hidden" name="acc_type" value={checked}></input>
          <p
            className="acc_option"
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
          </p>
          <p
            className="acc_option"
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
          </p>
          <button className="btn btn_continue">
            Continue
            <FaArrowRight className="img_arrow_right" />
          </button>
        </form>
      </section>

      {/* No account sign up section */}
      <section>
        <p className="sign_up">
          Haven't got an account yet?
          <button className="btn btn_sign_up">Sign up</button>
        </p>
      </section>
    </div>
  );
};
