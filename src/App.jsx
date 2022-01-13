import moment from "moment";
import "./App.css";
import Celendar from "./Component/Calendar/Celendar";

function App() {
  console.log(moment());
  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });
  const startDay = moment().startOf("month").startOf("week");
  // const endDay = moment().endOf("month").endOf("week");
  // console.log(startDay.format("YYYY-MM-DD"));
  // console.log(endDay.format("YYYY-MM-DD"));
  // const calendar = [];
  // const day = startDay.clone();
  // while (day.isAfter(endDay)) {
  //   calendar.push(day.clone());
  //   day.add(1, "day");
  // }
  return (
    <div className="main">
      <div className="container">
        <div className="CalendarMain">
          <div className="CalendarLeft">
            <Celendar startDay={startDay} />
          </div>
          <div className="CalendarRight">
            <Celendar startDay={startDay} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
