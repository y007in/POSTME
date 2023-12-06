import "./Main.css";

import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calender";
import Question from "../../components/Question/Question";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Calendar />
      <Question />
    </div>
  );
};

export default Main;
