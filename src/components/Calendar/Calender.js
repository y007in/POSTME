import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        value={date}
        onChange={setDate}
        formatDay={(_, date) => moment(date).format("DD")}
        minDetail="month"
        maxDetail="month"
        prev2Label={null}
        next2Label={null}
        tileContent={({ date }) => {
          let html = [];
          if (data.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<div className="dot"></div>);
          }
          return <div className="dotContainer">{html}</div>;
        }}
      />
      <p>{moment(date).format("YYYY년 MM월 DD일")}</p>
    </div>
  );
}

export default Calender;
