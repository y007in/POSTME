import "./Card.css";

const Card = (props) => {
  const v = props.value;

  return (
    <section className="answerboxContainer">
      <p>{v.date}</p>
      <div className="answerbox">
        <div className="q_question">
          <img src={`${process.env.PUBLIC_URL}Assets/q.png`} alt="q" />
          <div className="questionbox">{v.question}</div>
        </div>
        <div className="subanswerbox">{v.answer}</div>
      </div>
    </section>
  );
};

export default Card;
