import React from "react";
import { useNavigate } from "react-router-dom";

import "./Back.css";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div className="back">
      <span className="backBtn" onClick={() => navigate(-1)}>
        <img src={`${process.env.PUBLIC_URL}Assets/back.png`} alt="back" />
      </span>
    </div>
  );
};

export default Back;
