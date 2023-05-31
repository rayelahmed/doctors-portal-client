import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import "./InfoCard.css";

const InfoCard = () => {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      <div
        className="card lg:card-side info-card w-100 bg-primary text- 
       white"
      >
        <figure className="icon">
          <img src={clock} alt="" />
        </figure>
        <div className=" card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div className="card lg:card-side info-card w-100 bg-accent text-white">
        <figure className="icon">
          <img src={marker} alt="" />
        </figure>
        <div className=" card-body">
          <h2 className="card-title">Visit our location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className="card lg:card-side info-card w-100 bg-primary text-white">
        <figure className="icon">
          <img src={phone} alt="" />
        </figure>
        <div className=" card-body">
          <h2 className="card-title">Contact us now</h2>
          <p>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
