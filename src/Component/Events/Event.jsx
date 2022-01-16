import React from "react";
// import { Link } from 'react-router-dom';

const Event = (props) => {
  const { day,events } = props;

  console.log(events);
  return (
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
                  <img src="https://staticg.sportskeeda.com/editor/2021/10/8cd36-16334407189532-800.jpg" alt="" />
                </div>
                <a href="" className="viewpro">View Client Profile</a>
              </div>
            </div>
            <div className="right"><i class='bx bx-camera-movie'></i></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
