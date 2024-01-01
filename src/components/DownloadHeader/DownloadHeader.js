import "./DownloadHeader.css";
import { useNavigate, useLocation } from "react-router-dom";

const DownloadHeader = (props) => {
  const navigate = useNavigate();
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const location = useLocation();
  const num = location.state ? location.state.num : "";

  // const downloadClickHandler = () => {
  //   navigate("/Download", { state: props.answerListArr });
  // };

  return (
    <header className="postHeader">
      <div className="downloadHeader">
        <span className="backBtn" onClick={() => navigate(-1)}>
          <img src={`${process.env.PUBLIC_URL}Assets/back.png`} alt="back" />
        </span>
        {num !== null && (
          <span className="mailCount">{parseInt(num) + 1}번째 우체통</span>
        )}
      </div>
    </header>
  );
};

export default DownloadHeader;
