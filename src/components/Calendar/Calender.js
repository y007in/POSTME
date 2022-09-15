import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { useDispatch } from "react-redux";
import { calendarActions } from "../../store/calendar-slice";
import store from "store-js";

function Calender() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const selectDate = moment(date).format("YYYY.MM.DD");
  const answerList = store.get("answer");
  const data = [];

  if (answerList !== undefined) answerList.map((v) => data.push(v.date));

  useEffect(() => {
    dispatch(calendarActions.selectDate(selectDate));
  }, [dispatch, selectDate]);

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
          if (data.find((x) => x === moment(date).format("YYYY.MM.DD"))) {
            const key = `aa${moment(date).format("DD")}`;
            html.push(<div key={key} className="dot"></div>);
          }
          return <div className="dotContainer">{html}</div>;
        }}
      />
    </div>
  );
}

export default Calender;
