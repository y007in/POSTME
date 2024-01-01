import store from "store-js";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";
import DownloadHeader from "../../components/DownloadHeader/DownloadHeader";

const Post = () => {
  const answerList = store.get("answer") || [];
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
      <DownloadHeader />
      <main className="post">
        {answerListArr.map((v, i) => {
          const key = `post${i}`;
          return <Card key={key} value={v} />;
        })}
      </main>
    </div>
  );
};

export default Post;
