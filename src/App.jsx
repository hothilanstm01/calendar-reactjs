import moment from "moment";
import { useEffect, useState } from "react";
import eventsApi from "./api/eventsApi";
import "./App.css";
import CalendarLeft from "./Component/Calendar/CalenderLeft";
import Celendar from "./Component/Calendar/Celendar";
import Header from "./Component/Header/Header";
import HeaderLeft from "./Component/Header/HeaderLeft";

function App() {
  const [events, setEvents] = useState([]);
  const [moments, setMoments] = useState(moment());
  moment.updateLocale("en", { week: { dow: 1 } });
  const startDay = moments.clone().startOf("month").startOf("week");
  const prevHandler = () => {
    setMoments((prev) => prev.clone().subtract(1, "month"));
  };
  const nextHandler = () => {
    setMoments((prev) => prev.clone().add(1, "month"));
  };
  const todayHandler = () => setMoments(moment());
  const handleChange = (value) => {
    setMoments((prev) => prev.clone().month(value));
  }
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await eventsApi.GetEvents();
      setEvents(res);
    };
    fetchEvents();
  }, [moments]);
  return (
    <div className="main">
      <div className="container">
        <div className="CalendarMain">
          <div className="CalendarLeft">
            <HeaderLeft
              today={moments}
              prevHandler={prevHandler}
              nextHandler={nextHandler}
              // todayHandler={todayHandler}
            />
            <CalendarLeft startDay={startDay} today={moments} events={events} />
          </div>
          <div className="CalendarRight">
            <Header
              today={moments}
              prevHandler={prevHandler}
              nextHandler={nextHandler}
              todayHandler={todayHandler}
              handleChange={handleChange}
            />
            <Celendar
              startDay={startDay}
              today={moments}
              events={events}
              prevHandler={prevHandler}
              nextHandler={nextHandler}
              todayHandler={todayHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
