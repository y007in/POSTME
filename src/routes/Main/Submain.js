import { Calendar } from "react-calendar";

import Header from "../../components/Header";
import Question from "../../components/Question";

const Main = () => {
  return (
    <div>
      <Header headText={"헤더입니다"} />
      <Calendar />
      <Question text={"질문이 있습니다."} />
    </div>
  );
};

export default Main;
