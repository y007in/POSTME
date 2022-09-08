import "./Question.css";
import store from "store-js";
import { useState } from "react";
import dummy from "../../Questionlist.json";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../../store/question-slice";

const Question = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const isReadOnly = useSelector((state) => state.question.isReadOnly);

  const questionId = store.get("questionId");
  if (questionId === undefined) store.set("questionId", { id: 0 });

  const readOnlyHandler = () => {
    if (!isReadOnly) {
      return (
        <textarea
          className="answer"
          maxLength="100"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      );
    }
    return <textarea className="answer" readOnly></textarea>;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(questionActions.readOnly());
  };

  return (
    <div className="question">
      <div className="todayq">
        {/* <img src={process.env.PUBLIC_URL + `Assets/todayq.png`} /> */}
        <img src={`${process.env.PUBLIC_URL}Assets/todayq.png`} />
      </div>vdvdsvsdvsdvsdvsdv
      <div className="qquestion">
        <img src={`${process.env.PUBLIC_URL}Assets/q.png`} />
        <p className="qq">{dummy[questionId.id].Q}</p>
      </div>
      <form onSubmit={submitHandler}>
        {readOnlyHandler()}
        <div>
          <button type="submit" className="sendbutton">
            보내기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Question;
