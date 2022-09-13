import "./DownloadHeader.css";
import { useNavigate } from "react-router-dom";

const DownloadHeader = () => {
  const navigate = useNavigate();
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <div className="first">
      <button className="back2" onClick={() => navigate(-1)}>
        <img src={`${process.env.PUBLIC_URL}Assets/back.png`} />
      </button>
      <img
        className="firstpostbox"
        src={`${process.env.PUBLIC_URL}Assets/firstpostbox.png`}
      />
    </div>
  );
};

export default DownloadHeader;
