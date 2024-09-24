import React from 'react';
import './MentorSchedule.css';

const MentorSchedule = () => {
  const days = ['Time/Date','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const times = ['9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 1:00', '1:00 - 2:00', '2:00 - 3:00', '3:00 - 4:00'];

  return (
    <div className="mentor-schedule-container">
      <h1>Time Table</h1>
      <div className="schedule-grid">
        {/* Render time slots (header row) */}
        <div className="empty-cell"></div> {/* Empty corner */}
        {times.map((timeSlot, j) => (
          <div key={`time-${j}`} className="schedule-header">{timeSlot}</div>
        ))}

        {/* Render days and time slots (rows and columns) */}
        {days.map((day, i) => (
          <React.Fragment key={`day-${i}`}>
            <div className="schedule-day">{day}</div> {/* Render day */}
            {times.map((_, j) => (
              <div key={`cell-${i}-${j}`} className="schedule-cell">
                {/* You can populate this with dynamic data if needed */}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MentorSchedule;
