import React from "react";
const Footer = () => {
  return (
    <div className="">
      <footer className="footer p-10  text-black">
        <div className=" pl-20 ">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deeply Checkup</a>
        </div>
        <div className=" pl-20 ">
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div className=" pl-20">
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>

      <footer className="footer footer-center p-4 text-black">
        <div>
          <p>Copyright © 2023 - All right reserved </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
