import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import "./AppointmentBanner.css";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="img">
          <img
            src={chair}
            alt="Chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="calender">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
