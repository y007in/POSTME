import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = ({ text }) => {
  //https://www.codingfactory.net/11010
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  const navigate = useNavigate();

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
        <progress className="progress" value="30" max="100"></progress>
      </div>
      <div className="progressnumber">{text}</div>
    </header>
  );
};
export default Header;
