import React, { useRef } from "react";
import moment from "moment";
import styled from "styled-components";
import Event from "../Events/Event";

const CellWrapper = styled.div`
  width: 14.28%;
  text-align: center;
  height: ${(props) => (props.isHeader ? 30 : 50)}px;
  color: ${(props) => (props.isSelectedMonth ? "#000" : "#ccc")};
  background-color: ${(props) => (props.isDay ? "#E4F6ED" : "")};
  /* .EventItem{
    display: none;
    &.active {
      display: block;
      // overflow: hidden;
    }
  } */
`;
const CalendarLeft = (props) => {
  const moments = moment();
  const { startDay, today, events } = props;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");
  const showEvents = useRef(null);

  const evToggle = () => {
    showEvents.current.classList.toggle("active");
    console.log(showEvents);
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
            onClick={evToggle}
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

      <div className="Events" ref={showEvents}>
        <div className="Event">
          <div className="HeaderEvent">
            <h3 className="Title">Upcoming Events</h3>
            <div className="View">View All</div>
          </div>
          <div className="Content">
            <h4 className="Day">{day.format("dddd, d MMM")}</h4>
            <div className="Evn">
              <div className="content">
                <div className="left">
                  <a href="" className="Name">
                    Gentle Yoga for Terrible Times
                  </a>
                  <div className="Time">9:00 AM - 09:30 PM GTM +8</div>
                  <div className="User">
                    <div className="Image">
                      <img
                        src="https://staticg.sportskeeda.com/editor/2021/10/8cd36-16334407189532-800.jpg"
                        alt=""
                      />
                    </div>
                    <a href="" className="viewpro">
                      View Client Profile
                    </a>
                  </div>
                </div>
                <div className="right">
                  <i class="bx bx-camera-movie"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarLeft;
