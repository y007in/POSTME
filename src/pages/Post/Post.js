import "./Post.css";
import store from "store-js";
import PostboxHeader from "../../components/PostboxHeader/PostboxHeader";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";

const Post = () => {
  const answerList = store.get("answer");
  const location = useLocation();
  const num = location.state.num;

  const stringNum = String(num);
  const firstNum = Number(stringNum + "0");
  const lastNum = Number(stringNum + "9");

  const answerListArr = [];

  for (let i = firstNum; i <= lastNum; i++) {
    answerListArr.push(answerList[i]);
  }

  return (
    <div>
      <PostboxHeader />
      <main className="box">
        {answerListArr.map((v, i) => {
          const key = `post${i}`;
          return <Card key={key} value={v} />;
        })}
      </main>
    </div>
  );
};

export default Post;
