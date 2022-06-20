import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({userRole}) => {

  if (userRole !== "admin") {
    return (<nav className="sidenav">
    <div>
      <h2>Book a Mechanic</h2>
    </div>
    <Link to="/">Home</Link>
    <Link to="/MakeAppointment">Make Appointment</Link>
    <Link to="/myappointmentpage">My Appointments </Link>

  </nav>)
  };

  return (
  <nav className="sidenav">
    <div>
      <h2>Book a Mechanic</h2>
    </div>
    <Link to="/">Home</Link>
    <Link to="/MakeAppointment">Make Appointment</Link>
    <Link to="/myappointmentpage">My Appointments </Link>
    <Link to="/additem">Add Car</Link>
    <Link to="/delete-car">Delete Car</Link>

  </nav>
  );
};

Navbar.propTypes = {
  userRole: PropTypes.string,

};
Navbar.defaultProps = {
  userRole: "default",
};

export default Navbar;


