import { useNavigate } from "react-router-dom";

import "./MyPage.css";
import Profile from "../../components/Profile/Profile";
import MyPost from "../../components/MyPost/MyPost/MyPost";

const MyPage = () => {
  const navigator = useNavigate();

  return (
    <div>
      <button className="back" onClick={() => navigator(-1)}>
        <img src={`${process.env.PUBLIC_URL}Assets/back.png`} alt="back" />
      </button>
      <Profile />
      <MyPost />
    </div>
  );
};

export default MyPage;
