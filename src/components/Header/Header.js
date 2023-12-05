import { useNavigate } from "react-router-dom";
import "./Header.css";
import store from "store-js";

const Header = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  const navigate = useNavigate();
  const answerList = store.get("answer");

  const Count = () => {
    if (answerList === undefined) return "0";
    else return answerList.length % 10;
  };

  const myPageClickHandler = () => {
    navigate("/MyPage");
  };

  return (
    <header>
      <div className="header_wrap">
        <div className="left">
          <button className="goToProfile" onClick={myPageClickHandler}>
            <img
              src={process.env.PUBLIC_URL + `Assets/profile.png`}
              alt="profile icon"
            />
          </button>
        </div>
        <div className="right">
          <progress className="progress" value={Count()} max="10"></progress>
          <p className="progressNum">{Count()}/10</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
