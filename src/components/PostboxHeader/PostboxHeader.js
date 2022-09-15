import "./PostboxHeader.css";
import { useNavigate } from "react-router-dom";

const PostboxHeader = (props) => {
  const navigate = useNavigate();
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const downloadClickHandler = () => {
    navigate("/Download", { state: props.answerListArr });
  };

  return (
    <div className="first">
      <button className="back2" onClick={() => navigate(-1)}>
        <img src={`${process.env.PUBLIC_URL}Assets/back.png`} />
      </button>

      <img
        className="firstpostbox"
        src={`${process.env.PUBLIC_URL}Assets/firstpostbox.png`}
      />
      <button className="share">
        <img src={`${process.env.PUBLIC_URL}Assets/share.png`} />
      </button>
      <button className="download" onClick={downloadClickHandler}>
        <img src={`${process.env.PUBLIC_URL}Assets/download.png`} />
      </button>
    </div>
  );
};

export default PostboxHeader;
