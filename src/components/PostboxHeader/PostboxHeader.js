import "./PostboxHeader.css";
import { useNavigate } from "react-router-dom";

import DownloadHeader from "../DownloadHeader/DownloadHeader";

const PostboxHeader = (props) => {
  const navigate = useNavigate();
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const downloadClickHandler = () => {
    navigate("/Download", { state: props.answerListArr });
  };

  return (
    <div className="first">
      <DownloadHeader />
      <div className="btns">
        <button className="share">
          <img src={`${process.env.PUBLIC_URL}Assets/share.png`} alt="share" />
        </button>
        <button className="download" onClick={downloadClickHandler}>
          <img
            src={`${process.env.PUBLIC_URL}Assets/download.png`}
            alt="download"
          />
        </button>
      </div>
    </div>
  );
};

export default PostboxHeader;
