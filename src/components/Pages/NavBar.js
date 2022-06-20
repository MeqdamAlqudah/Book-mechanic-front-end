import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sidenav">
    <div>
      <h2>Book a Mechanic</h2>
    </div>
    <Link to="/">Home</Link>
    <Link to="/MakeAppointment">Make Appointment</Link>
    <Link to="/Appointments">My Appointments </Link>
    <Link to="/Additem">Add Car</Link>
    <Link to="/delete-car">Delete Car</Link>

  </nav>
);
export default Navbar;
