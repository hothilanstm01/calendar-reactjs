import React, { useRef, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { Select } from "antd";

const { Option } = Select;

const CellWrapper = styled.div`
  width: 14.28%;
  text-align: center;
  border: ${(props) => (props.isHeader ? "" : "1px solid #eaeaea")};
  height: ${(props) => (props.isHeader ? 50 : 100)}px;
  color: ${(props) => (props.isSelectedMonth ? "#000" : "#ccc")};
  background-color: ${(props) => (props.isDay ? "#E4F6ED" : "")};
`;
const Celendar = (props) => {
  const { startDay, today, events } = props;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");
  const [visible, setVisible] = useState('');

  const showDrawer = (value) => {
    setVisible(value);
    console.log(value._d);
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
            {visible ?
              <div className="EventItem">
              {events
                .filter(
                  (event) =>
                    event.date >= dayItem.format("X") &&
                    event.date <= dayItem.clone().endOf("day").format("X")
                )
                .slice(0, 2)
                .map((event) => (
                  <>
                    <a className="event"  href={event.url}>{event.name}</a>
                  </>
                ))}
                
            </div> : ''
            }
            
          </CellWrapper>
        ))}
      </div>
    </>
  );
};

export default Celendar;
