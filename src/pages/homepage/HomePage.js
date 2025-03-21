
import React, { useState } from "react";
import { BellIcon } from "@heroicons/react/outline";
import logo2 from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import profil from "../../assets/profil.png";

const HomePage = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState("Timetable");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  /*
  const timetableData = [
    { day: "Sunday", subject: "Maths", time: "08:00 - 10:00", color: "bg-red-300" },
    { day: "Monday", subject: "French", time: "08:00 - 09:00", color: "bg-blue-200" },
    { day: "Monday", subject: "Science", time: "09:00 - 10:00", color: "bg-blue-400" },
    { day: "Monday", subject: "English", time: "10:00 - 11:00", color: "bg-yellow-300" },
    { day: "Tuesday", subject: "Maths", time: "08:00 - 10:00", color: "bg-red-300" },
    { day: "Tuesday", subject: "History", time: "11:00 - 12:00", color: "bg-orange-300" },
    { day: "Wednesday", subject: "Science", time: "08:00 - 09:00", color: "bg-blue-400" },
    { day: "Wednesday", subject: "French", time: "09:00 - 11:00", color: "bg-blue-200" },
    { day: "Thursday", subject: "English", time: "08:00 - 10:00", color: "bg-yellow-300" },
    { day: "Sunday", subject: "Science", time: "11:00 - 12:00", color: "bg-blue-400" },
    { day: "Sunday", subject: "French", time: "14:00 - 15:00", color: "bg-blue-200" },
    { day: "Sunday", subject: "History", time: "15:00 - 16:00", color: "bg-orange-300" },
    { day: "Tuesday", subject: "History", time: "15:00 - 16:00", color: "bg-orange-300" },
    { day: "Thursday", subject: "Arabic", time: "14:00 - 16:00", color: "bg-red-300" },
  ];
  */
  const timetableData = [
    { subject: "Maths", time: "08:00 - 10:00", day: "Sunday", color: "bg-red-200 text-red-600" },
    { subject: "Science", time: "11:00 - 12:00", day: "Sunday", color: "bg-blue-200 text-blue-600" },
    { subject: "French", time: "08:00 - 09:00", day: "Monday", color: "bg-cyan-200 text-cyan-600" },
    { subject: "Science", time: "09:00 - 10:00", day: "Monday", color: "bg-blue-200 text-blue-600" },
    { subject: "English", time: "10:00 - 11:00", day: "Monday", color: "bg-yellow-200 text-yellow-600" },
    { subject: "Maths", time: "08:00 - 10:00", day: "Tuesday", color: "bg-red-200 text-red-600" },
    { subject: "History", time: "11:00 - 12:00", day: "Tuesday", color: "bg-orange-200 text-orange-600" },
    { subject: "Science", time: "08:00 - 09:00", day: "Wednesday", color: "bg-blue-200 text-blue-600" },
    { subject: "French", time: "09:00 - 11:00", day: "Wednesday", color: "bg-cyan-200 text-cyan-600" },
    { subject: "English", time: "08:00 - 10:00", day: "Thursday", color: "bg-yellow-200 text-yellow-600" },
    { subject: "French", time: "14:00 - 15:00", day: "Sunday", color: "bg-cyan-200 text-cyan-600" },
    { subject: "History", time: "15:00 - 16:00", day: "Sunday", color: "bg-orange-200 text-orange-600" },
    { subject: "History", time: "15:00 - 16:00", day: "Monday", color: "bg-orange-200 text-orange-600" },
    { subject: "Arabic", time: "14:00 - 16:00", day: "Thursday", color: "bg-red-200 text-red-600" },
  ]
  
  
  const handleNavigation = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      if (tab === "Events") {
        navigate("/EventsPage");
      } else if (tab === "Timetable") {
        navigate("/");
      }
    }
  };

  return (
    
    <div className="w-full h-screen bg-gray-50">
      
      

      <nav className="bg-skooligreen1 h-[93px] shadow-labelShadow flex justify-between items-center  px-10">
  
  <div className="flex items-center">
    <img src={logo2} alt="logo2" className="ml-[22px] mt-[20px]" />
    
    <div className="flex gap-8  mt-[30px] ml-[70px] ">
      <span
        className= {`cursor-pointer inline-block  transition-all duration-200     ${
          activeTab === "Events" ? " border-b-4 border-white" : ""
        }`}
        onClick={() => {
          setActiveTab("Events");
          handleNavigation("Events")}
        }
      >
       <p className=" font-[600] text-white text-[26px] leading-[100%]  font-poppins"> Events </p> 
      </span>

      <span
        className={`cursor-pointer inline-block  transition-all duration-200 ${
          activeTab === "Timetable" ? " border-b-4 pb-7 border-white" : ""
        }`}
        onClick={() => {
          setActiveTab("Timetable");
          handleNavigation("Timetable")}
        }
      >
         <p className=" font-[700] text-[26px] text-white leading-[100%] font-poppins"> Timetable </p>
      </span>
    </div>
  </div>

  
  <div className="flex items-center gap-6">
    
    <div className="relative">
      <BellIcon
        className="w-6 h-6 text-white cursor-pointer"
        onClick={() => setShowNotifications(!showNotifications)}
      />
      {showNotifications && (
        <div className="absolute right-0 mt-2 w-48 bg-white border shadow-lg p-2 rounded">
          <p className="text-gray-500">You have no notifications</p>
        </div>
      )}
    </div>

    
    <div className="relative">
      <img
        src={profil} 
        alt="profil"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white text-gray-700 rounded-md shadow-lg w-40">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-skooligreen1-19 cursor-pointer">Profil</li>
            <li className="px-4 py-2 hover:bg-skooligreen1-19 cursor-pointer">Notes</li>
            <li className="px-4 py-2 hover:bg-skooligreen1-19 cursor-pointer">Langue ▶</li>
            <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">Log out</li>
          </ul>
        </div>
      )}
    </div>
  </div>
</nav> 

      {/* body */}
      
        <div className="flex flex-col pl-[65px] pt-[50px]">
  <h2 className="text-skooligreen1 font-poppins text-[40px] font-bold leading-[100%]">
    TimeTable
  </h2>
</div>

{/* Weekdays */}
<div className="flex flex-col pt-[57px]">
  <div className="grid grid-cols-6 gap-2 font-montserrat text-[22px] pl-[10px] pr-[118px] text-[#B1B1B1] leading-[16px] text-center font-[400px]">
    <div>Week</div>
    <div>Sunday</div>
    <div>Monday</div>
    <div className="text-[#7C7C7C] font-[600px]">Tuesday</div>
    <div>Wednesday</div>
    <div>Thursday</div>
  </div>
</div>

{/* Timetable */}
<div className="relative  pl-[105px] pr-[105px]">
  {[...Array(10)].map((_, i) => (
    <div key={i} className="relative grid grid-cols-6 gap-2 h-14 items-center">
      {/* Time Column */}
      <div className="relative z-10 text-[19px] top-[18px] font-montserrat text-[#B1B1B1] font-[400px] leading-[16px] w-[60px] text-right pr-[10px]">
        {`${String(8 + i).padStart(2, "0")}:00`}
      </div>

      {/* Full horizontal line */}
      <div className="absolute left-[64px] h-14 top-[47px] w-[calc(100%-120px)] border-t border-gray-300"></div>

      {/* Day Columns */}
      {[...Array(5)].map((_, j) => {
        const subject = timetableData.find(
          (s) =>
            s.day === ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"][j] &&
            parseInt(s.time.split(":")[0]) === 8 + i
        );

        if (!subject) return <div key={j}></div>;

        const startTime = parseInt(subject.time.split(" - ")[0].split(":")[0]);
        const endTime = parseInt(subject.time.split(" - ")[1].split(":")[0]);
        const duration = endTime - startTime;

        return (
          <div
            key={j}
            className={`relative rounded-lg text-sm font-semibold flex flex-col items-center justify-center ${subject.color}`}
            style={{
              gridRow: `span ${duration}`,
              height: `${duration * 4}rem`,
              margin: "4px",
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "10px",
            }}
          >
            <span className="text-lg">{subject.subject}</span>
            <span className="text-xs flex items-center gap-2">{subject.time}</span>
          </div>
        );
      })}
    </div>
  ))}
</div>

      </div>
    
  );
};

export default HomePage;