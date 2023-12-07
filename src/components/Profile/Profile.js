import "./Profile.css";
import store from "store-js";
const Profile = () => {
  const answerList = store.get("answer") || [];
  const postboxLength = Math.floor(answerList.length / 1) || 0;
  const openbox = new Array(postboxLength).fill(0);
  return (
    <div className="forme">
      <img
        className="profile"
        src={`${process.env.PUBLIC_URL}Assets/forme.png`}
        alt="profile"
      />
      <h2 className="name">장유진</h2>
      <div className="balloon">
        {openbox.length <= 10
          ? "나에 대해 더 알아가봐요"
          : "나의 모습을 잘 알고 있어요"}
      </div>
    </div>
  );
};

export default Profile;
