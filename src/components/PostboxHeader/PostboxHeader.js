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
      <button className="download" onClick={downloadClickHandler}>
        <img
          src={`${process.env.PUBLIC_URL}Assets/download.png`}
          alt="download"
        />
      </button>
    </div>
  );
};

export default PostboxHeader;
