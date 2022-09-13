import "./Post.css";
import store from "store-js";
import dummy from "../../Questionlist.json";
import PostboxHeader from "../../components/PostboxHeader/PostboxHeader";

const Post = () => {
  const questionId = store.get("questionId");
  const answerList = store.get("answer");
  const savedate = answerList.find((x) => x.date);
  const answer = answerList[answerList.length - 1].answer;

  return (
    <div>
      <PostboxHeader />
      <div className="box">
        <p>{savedate.date}</p>
        <div className="answerbox">
          {dummy[questionId.id].Q}
          {answer}
        </div>
        {/* <p>{savedate.date}</p>
        <div className="answerbox"></div>
        <p>2022.09.14</p>
        <div className="answerbox"></div>
        <p>2022.09.11</p>
        <div className="answerbox"></div>
        <p>2022.09.11</p>
        <div className="answerbox"></div>
        <p>2022.09.11</p>
        <div className="answerbox"></div>
        <p>2022.09.11</p>
        <div className="answerbox"></div>
        <p>2022.09.11</p>
        <div className="answerbox"></div>
        <p>2022.09.11</p>
        <div className="answerbox"></div>
        <p>2022.09.11</p>
        <div className="answerbox"></div> */}
      </div>
    </div>
  );
};

export default Post;
