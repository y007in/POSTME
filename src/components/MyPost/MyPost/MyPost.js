import "./MyPost.css";
import { useNavigate } from "react-router-dom";
import store from "store-js";

const MyPost = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const navigate = useNavigate();
  const answerList = store.get("answer") || [];
  const postboxLength = Math.floor(answerList.length / 10) || 0;
  const openbox = new Array(postboxLength).fill(0);

  const postboxClickHandler = (e) => {
    const num = e.currentTarget.value;
    navigate("/Post", { state: { num } });
  };

  const handleLogout = () => {
    const shouldLogout = window.confirm("로그아웃하시겠습니까?");

    if (shouldLogout) {
      alert("로그아웃되었습니다.");
    }
  };
  return (
    <main className="mypost">
      <div className="postboxheader">
        <div className="mypostboxtext">
          <span className="title">나의 우체통</span>
          <p className="num">({openbox.length}개)</p>
        </div>

        <button className="all" onClick={() => navigate("/Total")}>
          전체보기
        </button>
      </div>
      <div className="mypostbox">
        {openbox.length === 0 && (
          <div className="nomail">
            <img
              src={`${process.env.PUBLIC_URL}Assets/nomailbox.png`}
              alt="nomailicon"
            />
          </div>
        )}
        {openbox.length !== 0 &&
          openbox.map((v, i) => {
            const key = `postbox${i}`;
            return (
              <button key={key} value={i} onClick={postboxClickHandler}>
                <img
                  src={`${process.env.PUBLIC_URL}Assets/yesmailbox.png`}
                  alt="openboxicon"
                />
              </button>
            );
          })}
      </div>

      <button className="logout" onClick={handleLogout}>
        로그아웃
      </button>
    </main>
  );
};

export default MyPost;
