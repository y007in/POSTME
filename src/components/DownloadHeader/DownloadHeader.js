import "./DownloadHeader.css";
import { useNavigate } from "react-router-dom";
import store from "store-js";

const DownloadHeader = () => {
  const navigate = useNavigate();
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  const answerList = store.get("answer") || [];
  const postboxLength = Math.floor(answerList.length / 1) || 0;
  const openbox = new Array(postboxLength).fill(0);
  return (
    <div className="downloadHeader">
      <span className="backBtn" onClick={() => navigate(-1)}>
        <img src={`${process.env.PUBLIC_URL}Assets/back.png`} alt="back" />
      </span>
      <span className="mailCount">{openbox.length}번째 우체통</span>
    </div>
  );
};

export default DownloadHeader;
