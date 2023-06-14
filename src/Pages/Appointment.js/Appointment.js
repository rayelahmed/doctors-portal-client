import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import Footer from "../Shared/Footer/Footer";
import AvailableSlots from "./AvailableSlots";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableSlots
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <Footer />
    </div>
  );
};

export default Appointment;
