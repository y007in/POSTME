import "../Post/Post.css";
import store from "store-js";
import Back from "../../components/Back/Back";
import Card from "../../components/Card/Card";
const Total = () => {
  const answerList = store.get("answer") || [];
  return (
    <div>
      <Back />
      <main className="box">
        {answerList.map((v, i) => {
          const key = `post${i}`;
          return (
            <section key={key}>
              <main className="box">
                {answerList.map((v, i) => {
                  return <Card key={key} value={v} />;
                })}
              </main>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Total;
