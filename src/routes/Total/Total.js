import "../Post/Post.css";
import store from "store-js";
import { useNavigate } from "react-router-dom";

const Total = () => {
  const answerList = store.get("answer");
  const navigate = useNavigate();

  return (
    <div>
      <button className="back2" onClick={() => navigate(-1)}>
        <img src={`${process.env.PUBLIC_URL}Assets/back.png`} />
      </button>
      <main className="box">
        {answerList.map((v, i) => {
          const key = `post${i}`;
          return (
            <section key={key}>
              <p>{v.date}</p>
              <div className="answerbox">
                <div className="questionbox">
                  <img src={`${process.env.PUBLIC_URL}Assets/q.png`} />
                  {v.question}
                </div>
                <div className="subanswerbox">{v.answer}</div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Total;
