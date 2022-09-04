import { Calendar } from "react-calendar";

import Header from "../../components/Header";
import Noquestion from "../../components/Question";

const Main = () => {
  return (
    <div>
      <Header headText={"헤더입니다"} />
      <Calendar />
      <Noquestion text={<h2>오늘의 질문</h2>} />
    </div>
  );
};

export default Main;
