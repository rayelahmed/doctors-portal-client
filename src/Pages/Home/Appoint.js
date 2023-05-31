import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";

const Appoint = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex mb-5 mt-5 justify-center items-center"
    >
      <div className="flex-1">
        <img className="mt-[-115px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h6 className="text-2xl p-2 text-primary font-bold">Appointment</h6>
        <h3 className="text-white text-4xl">Make an appointment Today</h3>
        <p className="py-6 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page.
        </p>
        <button className="btn btn-primary text-white">Get Started</button>
      </div>
    </section>
  );
};

export default Appoint;
