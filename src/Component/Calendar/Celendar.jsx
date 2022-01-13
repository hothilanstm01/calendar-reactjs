import React from "react";
import styled from "styled-components";

const CellWrapper = styled.div`
  width: 14.28%;
  text-align: center;
  border: 1px solid #eaeaea;
  height: 100px;
  padding: 10px 0;
  color: ${(props) => (props.isWeekend ? "#E4F6ED" : "#000")};
`;
const Celendar = (props) => {
  const { startDay } = props;
  console.log(startDay);
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  console.log(daysArray);
  return (
    <div className="Celendar">
      {daysArray.map((dayItem) => (
        <CellWrapper
          key={dayItem.format("DDMMYYYY")}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
        >
          <div className="RowCell">
            <div className="DayWrapper">{dayItem.format("D")}</div>
          </div>
          {/* <div
          className="CellWrapper "
          key={dayItem.format("DDMMYYYY")}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
        >
          
        </div> */}
        </CellWrapper>
      ))}
    </div>
  );
};

export default Celendar;
