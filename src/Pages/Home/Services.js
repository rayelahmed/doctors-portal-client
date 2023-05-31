import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-section text-center">
      <div className="text-center">
        <h3 className="text-primary">OUR SERVICES</h3>
        <h2>Services We Provide</h2>
      </div>
      <div className="grid   grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div className="px-2 card w-100 bg-light text-black">
          <div className="card-body items-center text-center">
            <img className="card-title" src={fluoride} alt="" />
            <h3>Fluoride Treatment</h3>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="card ml-2 w-100 bg-light text-black">
          <div className="card-body items-center text-center">
            <img className="card-title" src={cavity} alt="" />
            <h3>Cavity Filling</h3>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="card w-100 bg-light text-black">
          <div className="card-body items-center text-center">
            <img className="card-title" src={whitening} alt="" />
            <h3>Teeth Whitening</h3>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="text-start">
              <h1 className="text-5xl font-bold">
                Exceptional Dental <br /> Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page.
              </p>
              <button className="btn btn-primary text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
