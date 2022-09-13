import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { useDispatch } from "react-redux";
import { calendarActions } from "../../store/calendar-slice";
//import store from "store-js";

//const answerList = store.get("answer");
//const AnswerDate = answerList[answerList.length - 1].date;
const data = [];
// const [mark, setMark] = useState([]);
// const {data} = useQuery(
//   ["logDate", month],
//   async () => {
//     const result = await axios.get(
//       `/api/healthLogs?health_log_type=DIET`
//     );
//     return result.data;
//   },
//   {
//     onSuccess: (data: any) => {
//       setMark(data);

//     },
//   }
// );

function Calender() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const selectDate = moment(date).format("YYYY.MM.DD");

  useEffect(() => {
    dispatch(calendarActions.selectDate(selectDate));
  }, [selectDate]);

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
            html.push(<div className="dot"></div>);
          }
          return <div className="dotContainer">{html}</div>;
        }}
      />
    </div>
  );
}

export default Calender;
