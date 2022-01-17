import React from "react";
import { Select } from "antd";
import moment from "moment";

const { Option } = Select;

const Header = (props) => {
  const { today, prevHandler, nextHandler, todayHandler,handleChange } = props;

  return (
    <div className="header">
      <div className="containt">
        <div className="Left">
          <div className="ButtonToday" onClick={todayHandler}>
            Today
          </div>
          <div className="ButtonGroup">
            <div className="ButtonPre" onClick={prevHandler}>
              <i class="bx bx-chevron-left"></i>
            </div>
            <div className="ButtonNext" onClick={nextHandler}>
              <i class="bx bx-chevron-right"></i>
            </div>
          </div>
          <h2 className="Title">{today.format("MMMM YYYY")}</h2>
        </div>
        <div className="Right">
          <Select
            style={{ width: 120 }}
            onChange={handleChange}
            placeholder="Month"
          >
            {[...Array(12)].map((i, month) => (
              <Option value={month} >
                {moment()
                  .month(month)
                  .format("MMMM")}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Header;
