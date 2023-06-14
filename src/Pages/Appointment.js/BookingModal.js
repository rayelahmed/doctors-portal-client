import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { format } from "date-fns";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { _id, name: treatmentName, slots } = treatment;
  const [user] = useAuthState(auth);

  const formattedDate = format(selectedDate, "PP");

  // ...

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const booking = {
      treatmentId: _id,
      patient: name,
      treatment: treatmentName,
      date: formattedDate,
      slot,
      email,
      patientName: user.displayName,
      phone,
    };

    fetch("http://localhost:5000/booking", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        if (data.success) {
          toast(`Appointment is set for ${formattedDate} at ${slot}`);
        } else {
          toast(data.message);
        }
        refetch();
        setTreatment(null);
      });
  };

  // ...

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg  text-center ">{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="date"
              type="text"
              disabled
              value={formattedDate}
              className="input w-full input-bordered "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              value={user?.displayName}
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              disabled
              value={user?.email}
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
