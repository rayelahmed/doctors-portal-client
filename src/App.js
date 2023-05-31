import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Reviews from "./Pages/Reviews/Reviews";
import ContactUs from "./Pages/Contact Us/ContactUs";
import Login from "./Pages/Shared/Login/Login";

import Appointment from "./Pages/Appointment.js/Appointment";
import SignUp from "./Pages/Shared/SignUp/SignUp";
import RequireAuth from "./Pages/Shared/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
