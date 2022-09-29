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
    <div>
      <DownloadHeader />
      <div className="downloadbox"></div>
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
              aria-label // 내용이 비어있을 때 사용하는 속성
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
