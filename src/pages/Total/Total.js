import store from "store-js";
import Back from "../../components/Back/Back";
import Card from "../../components/Card/Card";
const Total = () => {
  const answerList = store.get("answer") || [];
  return (
    <div>
      <Back />
      <main className="box_wrap">
        {answerList.map((v, i) => {
          const key = `post${i}`;
          return (
            <section key={key}>
              <main className="box">
                <Card key={key} value={v} />
              </main>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Total;
