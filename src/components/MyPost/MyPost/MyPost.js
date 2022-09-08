import "./MyPost.css";

const MyPost = ({}) => {
  return (
    <main>
      <div className="postboxheader">
        <div className="mypostboxtext">
          <img src={`${process.env.PUBLIC_URL}Assets/postbox.png`} />
        </div>
        <p className="num">(8개)</p>

        <button className="all">전체보기</button>
      </div>
      <div className="mypostbox">
        <button>
          <img src={`${process.env.PUBLIC_URL}Assets/yesmailbox.png`} />
          <img src={`${process.env.PUBLIC_URL}Assets/yesmailbox.png`} />
          <img src={`${process.env.PUBLIC_URL}Assets/yesmailbox.png`} />
        </button>
      </div>

      <button className="logout">로그아웃</button>
    </main>
  );
};

export default MyPost;
