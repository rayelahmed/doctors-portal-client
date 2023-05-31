import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-100 m-5 bg-light text-primary">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>

        <p className="text-black">
          {" "}
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p>
          <small className="text-black">
            {" "}
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </small>
        </p>
        <div className="card-actions pt-4">
          {/* <button className=""></button> */}

          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className=" btn btn-primary  text-white text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
