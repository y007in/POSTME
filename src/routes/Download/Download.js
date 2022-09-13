import "./Download.css";
import DownloadHeader from "../../components/DownloadHeader/DownloadHeader";
const Download = () => {
  return (
    <div>
      <DownloadHeader />
      <div className="downloadbox"></div>
      <div className="x"></div>

      <h2>색상선택</h2>
      <div className="color">
        <button className="white"></button>
        <button className="orange"></button>
        <button className="green"></button>
        <button className="blue"></button>
        <button className="purple"></button>
      </div>
      <button className="downloadbtn">다운로드</button>
    </div>
  );
};

export default Download;
