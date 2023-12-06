import "./MyPage.css";
import Profile from "../../components/Profile/Profile";
import MyPost from "../../components/MyPost/MyPost/MyPost";
import Back from "../../components/Back/Back";

const MyPage = () => {
  return (
    <div className="MyPage">
      <div className="MyPage_profile">
        <Back />
        <Profile />
      </div>
      <MyPost />
    </div>
  );
};

export default MyPage;
