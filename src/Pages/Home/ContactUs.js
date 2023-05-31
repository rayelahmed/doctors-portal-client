import React from "react";
import appointment from "../../assets/images/appointment.png";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex mb-5 mt-5 justify-center items-center"
    >
      <div className="contact-us">
        <div className="">
          <h6 className="text-2xl p-2 text-primary text-center font-bold ">
            Appointment
          </h6>
          <h3 className="text-black  text-white text-center text-4xl">
            Stay connected with us
          </h3>
          <form className="mt-5 justify-center items-center text-center">
            <input
              type="text"
              placeholder="Email Adress"
              className="mt-4 input"
            />
            <br />
            <input
              type="text"
              placeholder="Subject"
              className=" mt-4 input  "
            />
            <br />
            <textarea
              className="textarea mt-4"
              placeholder="Your Message"
            ></textarea>
            <br />
            <button className="btn mt-4 btn-primary text-white">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
