import "./MyPost.css";
import { useNavigate } from "react-router-dom";
import store from "store-js";

const MyPost = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const navigate = useNavigate();
  const answerList = store.get("answer");
  // const answerLength = answerList.length;

  // <button key={key} onClick={() => navigate("/Post")}>
  //   <img src={`${process.env.PUBLIC_URL}Assets/yesmailbox.png`} />
  // </button>

  // <button>
  //   <img src={`${process.env.PUBLIC_URL}Assets/nomailbox.png`} />
  // </button>

  // const postBoxHandler = () => {
  //   const yesmailboxLength = answerLength / 10;
  //   const yesmailboxHTML =
  //     '<button onClick={() => navigate("/Post")}><img src={`${process.env.PUBLIC_URL}Assets/yesmailbox.png`} /></button>';
  //   const nomailboxHTML =
  //     "<button><img src={`${process.env.PUBLIC_URL}Assets/nomailbox.png`} /></button>";

  //   if (yesmailboxLength <= 12) {
  //     const nomailboxLength = 13 - yesmailboxLength;
  //     const aa =
  //       yesmailboxHTML.repeat(yesmailboxLength) +
  //       nomailboxHTML.repeat(nomailboxLength);
  //     return { __html: aa };
  //   }
  // };

  return (
    <main>
      <div className="postboxheader">
        <div className="mypostboxtext">
          <img src={`${process.env.PUBLIC_URL}Assets/postbox.png`} />
        </div>
        <p className="num">()</p>

        <button className="all">전체보기</button>
      </div>
      <div className="mypostbox">
        {" "}
        <button onClick={() => navigate("/Post")}>
          <img src={`${process.env.PUBLIC_URL}Assets/yesmailbox.png`} />{" "}
        </button>
      </div>

      <button className="logout">로그아웃</button>
    </main>
  );
};

export default MyPost;
