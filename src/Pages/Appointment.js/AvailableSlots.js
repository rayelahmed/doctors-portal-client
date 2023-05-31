import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "./AvailableSlots.css";
import Service from "./Service";
import BookingModal from "./BookingModal";
import Loading from "../Shared/Loading";

const AvailableSlots = ({ selectedDate }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(selectedDate, "PP");
  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]);

  return (
    <div className="slots-section">
      <h2 className="text-primary text-center">
        Available Appointment: {format(selectedDate, "PP")}.
      </h2>
      <div className="available-slots grid m-5 p-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {services.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableSlots;
