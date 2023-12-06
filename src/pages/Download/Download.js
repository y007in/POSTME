import cx from "classnames";
import "./Download.css";
import DownloadHeader from "../../components/DownloadHeader/DownloadHeader";
import { useState } from "react";

const colors = ["white", "orange", "green", "blue", "purple"];

const Download = () => {
  const [isSelectColor, setIsSelectColor] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const colorBtnClickHandler = (e) => {
    const selectBtnValue = e.currentTarget.value;
    const arr = Array(colors.length).fill(false);
    arr[selectBtnValue] = true;
    setIsSelectColor(arr);
  };

  return (
    <div className="Download">
      <div className="DownloadHeader_container">
        <DownloadHeader />
      </div>
      <section className="downloadbox">
        {colors.map((_, i) => {
          if (isSelectColor[i]) {
            const key = `postBoxImage${i}`;
            return (
              <img
                src={`${process.env.PUBLIC_URL}Assets/download_${colors[i]}.png`}
                alt="download"
                className="downloadImage"
                key={key}
              />
            );
          }
          return null;
        })}
      </section>
      <div className="x"></div>
      <h2>색상선택</h2>
      <div className="color">
        {colors.map((v, i) => {
          const key = `colorBtn${i}`;
          return (
            <button
              key={key}
              type="button"
              value={i}
              className={cx(v, { selectbtn: isSelectColor[i] })}
              aria-label={`Color Button ${i}`}
              onClick={colorBtnClickHandler}
            />
          );
        })}
      </div>
      <button className="downloadbtn">다운로드</button>
    </div>
  );
};

export default Download;
