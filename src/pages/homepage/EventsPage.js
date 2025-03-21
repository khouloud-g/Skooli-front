import React, { useState } from "react";
import { BellIcon } from "@heroicons/react/outline";
import logo2 from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import profil from "../../assets/profil.png";




const EventsPage = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState("Events");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      {/* Navbar */}
      <nav className="bg-skooligreen1 shadow-labelShadow h-[93px] flex justify-between items-center px-10">
        <div className="flex items-center">
          <img src={logo2} alt="logo2" className="ml-[22px] mt-[20px]" />
          
          <div className="flex gap-8 mt-[30px] ml-[70px]">
            <span
              className={`cursor-pointer inline-block transition-all duration-200 ${
                activeTab === "Events" ? "border-b-4 pb-7 border-white" : ""
              }`}
              onClick={() => {
                setActiveTab("Events");
                handleNavigation("Events");
              }}
            >
              <p className="font-[700] text-white text-[26px] leading-[100%] font-poppins">Events</p>
            </span>
  
            <span
              className={`cursor-pointer inline-block transition-all duration-200 ${
                activeTab === "Timetable" ? "border-b-4 border-white" : ""
              }`}
              onClick={() => {
                setActiveTab("Timetable");
                handleNavigation("Timetable");
              }}
            >
              <p className="font-[600] text-[26px] text-white leading-[100%] font-poppins">Timetable</p>
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
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profil</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Notes</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Langue ▶</li>
                  <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">Log out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
  
     
  
    </div>
  );
  
};

export default EventsPage;
