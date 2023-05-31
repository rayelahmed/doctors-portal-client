import React from "react";
import "./Testimonial.css";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div className="testimonial-sectiion">
      <div className="flex justify-between">
        <div>
          <h6 className="text-2xl pt-5  text-primary font-bold">Testimonial</h6>
          <h3 className="text-black pt-2 text-4xl">What Our Patients Says</h3>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="testimonial-cards grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="card px-2 testimonial-card  w-100 text-black">
          <div className="card-body items-center text-center">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content.
            </p>
            <div className="card-actions items-center d-flex justify-end">
              <div>
                <img src={people1} alt="" />
              </div>
              <div>
                <h6> Winson Harry</h6>
                <p>
                  <small>Callifornia</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card testimonial-card  w-100 text-black">
          <div className="card-body items-center text-center">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content.
            </p>
            <div className="card-actions items-center d-flex justify-end">
              <div>
                <img src={people2} alt="" />
              </div>
              <div>
                <h6> Jessica Johan</h6>
                <p>
                  <small>Stolckhome</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card testimonial-card  w-100 text-black">
          <div className="card-body items-center text-center">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content.
            </p>
            <div className="card-actions items-center d-flex justify-end">
              <div>
                <img src={people3} alt="" />
              </div>
              <div>
                <h6>Tessa Lane</h6>
                <p>
                  <small>Reykjavík</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
