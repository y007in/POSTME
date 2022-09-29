import { useNavigate } from "react-router-dom";
import "./Header.css";
import store from "store-js";
import { useState } from "react";
const Header = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  const navigate = useNavigate();
  const answerList = store.get("answer");

  const Count = () => {
    if (answerList === undefined) return "0";
    else return answerList.length % 10;
  };

  return (
    <header>
      <div className="left">
        <button
          onClick={() => {
            navigate("/MyPage");
          }}
        >
          <img src={process.env.PUBLIC_URL + `Assets/profile.png`} />
        </button>
      </div>
      <div className="right">
        <progress className="progress" value={Count()} max="10"></progress>
      </div>
      <div className="progressnumber">{Count()}/10</div>
    </header>
  );
};
export default Header;
