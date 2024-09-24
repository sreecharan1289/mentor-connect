import React from 'react';
import './Appointments.css';

const Appointments = () => {
  return (
    <div className="appointments-container">
      <h2>Appointments</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Mentee</th>
            <th>Time</th>
            <th>Attend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12-09-2024</td>
            <td>John Doe</td>
            <td>10:00 AM - 11:00 AM</td>
            <td><button className="attend-btn">Attend</button></td>
          </tr>
          <tr>
            <td>13-09-2024</td>
            <td>Jane Smith</td>
            <td>11:30 AM - 12:30 PM</td>
            <td><button className="attend-btn">Attend</button></td>
          </tr>
          <tr>
            <td>14-09-2024</td>
            <td>Mark Wilson</td>
            <td>02:00 PM - 03:00 PM</td>
            <td><button className="attend-btn">Attend</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
