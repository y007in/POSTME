import store from "store-js";
import "./Total.css";
import Back from "../../components/Back/Back";
import Card from "../../components/Card/Card";
const Total = () => {
  const answerList = store.get("answer") || [];
  return (
    <div className="total">
      <Back />
      <main className="box_wrap">
        {answerList.length === 0 ? (
          <span className="noMailTxt">아직 도착한 편지가 없습니다.</span>
        ) : (
          answerList.map((v, i) => {
            const key = `post${i}`;
            return (
              <section key={key}>
                <main className="box">
                  <Card key={key} value={v} />
                </main>
              </section>
            );
          })
        )}
      </main>
    </div>
  );
};

export default Total;
