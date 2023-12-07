import "./Card.css";

const Card = (props) => {
  const v = props.value;

  return (
    <section className="answerboxContainer">
      <p className="anwerbox_date">{v?.date || []}</p>
      <div className="answerbox">
        <div className="q_question">
          <span>Q</span>
          <div className="questionbox">{v?.question || []}</div>
        </div>
        <div className="subanswerbox">{v?.answer || []}</div>
      </div>
    </section>
  );
};

export default Card;
