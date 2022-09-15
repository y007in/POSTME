import _, { cloneDeep } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import store from "store-js";
import moment from "moment";
import { useState } from "react";

import dummy from "../../Questionlist.json";
import "./Question.css";

const Question = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const today = moment(new Date()).format("YYYY.MM.DD");
  const questionId = store.get("questionId");
  const answerList = store.get("answer");
  const getExist = store.get("exist");

  const [content, setContent] = useState("");
  const [exist, setExist] = useState(getExist);
  const dispatch = useDispatch();
  const selectDate = useSelector((state) => state.calendar.date);

  if (questionId === undefined) {
    store.set("questionId", { id: 0 });
    store.set("exist", false);
  }

  if (answerList !== undefined) {
    const lastAnswerDate = answerList[answerList.length - 1].date;
    if (lastAnswerDate !== today && getExist === true) {
      setExist(false);
      store.set("exist", false);
    }
  }

  const readOnlyHandler = () => {
    let selectQuestion;
    let selectAnswer;

    if (!exist) {
      selectQuestion = dummy[questionId.id].Q;
      selectAnswer = (
        <textarea
          className="answer"
          maxLength="100"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      );
    } else {
      const selectObj = answerList.find((x) => x.date === selectDate);

      if (selectObj === undefined) {
        selectQuestion = "질문이 없습니다.";
        selectAnswer = (
          <textarea
            className="answer"
            maxLength="100"
            type="text"
            value="답변이 없습니다."
            onChange={(e) => setContent(e.target.value)}
          />
        );
      } else {
        selectQuestion = dummy[selectObj.id].Q;
        selectAnswer = (
          <textarea
            className="answer"
            maxLength="100"
            type="text"
            value={selectObj.answer}
            onChange={(e) => setContent(e.target.value)}
          />
        );
      }
    }
    return (
      <>
        <div className="qquestion">
          <img src={`${process.env.PUBLIC_URL}Assets/q.png`} />
          <p className="qq">{selectQuestion}</p>
        </div>
        <form onSubmit={submitHandler}>
          {selectAnswer}
          <div>
            {!exist && ( //조건문 문법
              <button type="submit" className="sendbutton">
                보내기
              </button>
            )}
          </div>
        </form>
      </>
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const submitAnswerObj = {
      id: questionId.id,
      question: dummy[questionId.id].Q,
      answer: content,
      date: today,
    };

    if (answerList === undefined) {
      store.set("answer", [submitAnswerObj]);
    } else {
      const newAnswer = cloneDeep(answerList);
      newAnswer.push(submitAnswerObj);
      store.set("answer", newAnswer);
    }

    store.set("exist", true);
    setExist(true);

    const newId = ++questionId.id;
    store.set("questionId", { id: newId });
  };

  return (
    <div className="question">
      <div className="todayq">
        {/* <img src={process.env.PUBLIC_URL + `Assets/todayq.png`} /> */}
        <img src={`${process.env.PUBLIC_URL}Assets/todayq.png`} />
      </div>
      {readOnlyHandler()}
    </div>
  );
};

export default Question;
