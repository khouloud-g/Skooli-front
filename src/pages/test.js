import React from "react";
const subjectColors = {
    Maths: "bg-red-300 bg-opacity-50 text-red-700",
    Science: "bg-blue-300 bg-opacity-50 text-blue-700",
    English: "bg-yellow-300 bg-opacity-50 text-yellow-700",
    French: "bg-teal-300 bg-opacity-50 text-teal-700",
    History: "bg-orange-300 bg-opacity-50 text-orange-700",
    Arabic: "bg-red-400 bg-opacity-50 text-red-800",
  };
  
  const TimetableCard = ({ subject, time }) => (
    <div className={`p-3 rounded-lg shadow-md ${subjectColors[subject]} text-center`}>
      <p className="font-semibold">{subject}</p>
      <p className="text-sm">{time}</p>
    </div>
  );
  
  const EventsPage = () => {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-green-600">TimeTable</h2>
        <div className="grid grid-cols-6 gap-4 mt-6">
          <div className="col-span-1 text-gray-500 font-medium">8:00</div>
          <TimetableCard subject="Maths" time="08:00 - 10:00" />
          <TimetableCard subject="French" time="08:00 - 09:00" />
          <TimetableCard subject="Maths" time="08:00 - 10:00" />
          <TimetableCard subject="Science" time="08:00 - 09:00" />
          <TimetableCard subject="English" time="08:00 - 10:00" />
  
          <div className="col-span-1 text-gray-500 font-medium">9:00</div>
          <TimetableCard subject="Science" time="09:00 - 10:00" />
          <div></div>
          <div></div>
          <TimetableCard subject="French" time="09:00 - 11:00" />
          <div></div>
  
          <div className="col-span-1 text-gray-500 font-medium">11:00</div>
          <TimetableCard subject="Science" time="11:00 - 12:00" />
          <TimetableCard subject="English" time="10:00 - 11:00" />
          <TimetableCard subject="History" time="11:00 - 12:00" />
          <div></div>
          <div></div>
  
          <div className="col-span-1 text-gray-500 font-medium">14:00</div>
          <TimetableCard subject="French" time="14:00 - 15:00" />
          <TimetableCard subject="History" time="15:00 - 16:00" />
          <TimetableCard subject="History" time="15:00 - 16:00" />
          <div></div>
          <TimetableCard subject="Arabic" time="14:00 - 16:00" />
        </div>
      </div>
    );
  };
  
  export default EventsPage;
  
  
  