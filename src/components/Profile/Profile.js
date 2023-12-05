import "./Profile.css";
const Profile = () => {
  return (
    <div className="forme">
      <img
        className="profile"
        src={`${process.env.PUBLIC_URL}Assets/forme.png`}
        alt="profile"
      />
      <h2>장유진</h2>
      <img
        className="balloon"
        src={`${process.env.PUBLIC_URL}Assets/balloon1.png`}
        alt="baloon
        "
      />
    </div>
  );
};

export default Profile;
