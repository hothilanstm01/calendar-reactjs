import React, { useRef, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import Event from "../Events/Event";

const CellWrapper = styled.div`
  width: 14.28%;
  text-align: center;
  height: ${(props) => (props.isHeader ? 30 : 50)}px;
  color: ${(props) => (props.isSelectedMonth ? "#000" : "#ccc")};
  background-color: ${(props) => (props.isDay ? "#E4F6ED" : "")};
`;
const CalendarLeft = (props) => {
  const { startDay, today, events } = props;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");
  const [dayValue, setdayValue] = useState(moment());
  const [visible, setVisible] = useState(false);
  const [colorValue, setcolorValue] = useState(null)
  const showDrawer = (value) => {
    setVisible(true);
    setdayValue(value);
    setcolorValue()
  };
  return (
    <>
      <div className="Celendar">
        {[...Array(7)].map((i, day) => (
          <CellWrapper isHeader>
            <div className="RowCell">
              {moment()
                .day(day + 1)
                .format("ddd")}
            </div>
          </CellWrapper>
        ))}
      </div>
      <div className="Celendar">
        {daysArray.map((dayItem) => (
          <CellWrapper
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}
            onClick={() => showDrawer(dayItem)}
          >
            <div className="RowCell">
              <div className="DayWrapper">
                {isCurrentDay(dayItem) ? (
                  <div className="CurrentDay">{dayItem.format("D")}</div>
                ) : (
                  dayItem.format("D")
                )}
              </div>
            </div>
          </CellWrapper>
        ))}
      </div>
      <div className="Line"></div>
      {visible ? <Event dayValue={dayValue} events={events} daysArray={daysArray.map(dayItem => dayItem)}/> : ''}
      
     
    </>
  );
};

export default CalendarLeft;
