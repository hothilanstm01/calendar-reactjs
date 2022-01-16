import React from "react";

const HeaderLeft = (props) => {
    const {today,prevHandler,nextHandler} = props;
  return (
    <div className="headerleft">
      <div className="containt">
        <div className="ButtonPre" onClick={prevHandler}>
          <i class="bx bx-chevron-left"></i>
        </div>
        <h2 className="Title">{today.format('MMM YYYY')}</h2>

        <div className="ButtonNext" onClick={nextHandler}>
          <i class="bx bx-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
