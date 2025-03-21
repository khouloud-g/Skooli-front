import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import typeimage from "../assets/type-page.png";
import logo from "../assets/logo.png";
import { BiChevronDown } from "react-icons/bi"; 
import { ChevronLeft, ChevronRight } from "lucide-react";

const ChooseType = () => {
  const [selectedType, setSelectedType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  

  const handleSubmit = () => {
    if (selectedType) {
      navigate(`/signup/${selectedType.toLowerCase()}`); 
    }
  };

  return (
    <div className=" max-w-[1280px]  flex max-h-[832px] bg-white ">
      {/* Left Sside */}
      <div className="w-1/2 relative px-[40px] pt-[15px]">


      
  <img src={logo}  alt="logo" className="relative  top-[95px] left-[125px] scale-125 "
  />

        <div className=" relative pl-[30px] pt-[40px] top-[199px] left-[102px]    ">
        <h2 className="   font-poppins  text-[45px] font-[700]  leading-[120%]  ">
        Choose Your <span className= " text-skooligreen1 ">Type</span>
        </h2>
        </div>

        
        <div className="relative top-[290px] left-[99px]">
         
         

          
          <div
            className={`w-[530px] h-[62px]   border-[3px] rounded-[8px] flex items-center justify-between 
              ${isOpen ? "border-[#52BD94]" : "border-[#00000024]"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`text-black text-[22px] p-10 font-roboto  ${selectedType ? "" : "text-black56"}`}>
              {selectedType || "Choose a Type "}
            </span>

            <BiChevronDown
              className={`w-12 h-7 items-center text-black opacity-[0.54] transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>

          
          {isOpen && (
            <ul className="absolute z-50 w-[530px]   bg-white border mt-1 rounded-lg shadow-lg">
              {["Parent", "Student", "Teacher"].map((option) => (
                <li
                  key={option}
                  className="p-3 hover:bg-skooligreen1-19 text-black75 font-title-small font-[400] text-[19px] cursor-pointer"
                  onClick={() => {
                    setSelectedType(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>       
        

        
        <div className=" text-[35px] flex gap-[35px] ">
        <button
         className="relative top-[438px] font-inter left-[99px] mt-6 flex items-center space-x-2 font-bold  text-skooligreen1  cursor-pointer" 
         onClick={() => navigate("/")}>
          <ChevronLeft className={' w-12 h-7  font-bold ' } /> 
          <span className=" ml-2 font-inter text-[33px] font-[700] leading-[100%]  ">Back</span>
       </button> 
        { /*i add this button so its take the user to the signup page */}
       <button 
         className="relative top-[438px] font-inter left-[330px]  mt-6 flex items-center justify-center px-6 py-3  font-bold  text-skooligreen1  cursor-pointer"
         onClick={ handleSubmit} 
         disabled={!selectedType} >
            
          <span className="relative ml-2 font-inter text-[33px]  font-[700] leading-[100%]  ">Next</span>
          <ChevronRight className={' w-12 h-7 font-bold ' } /> 
          
       </button> 
       </div>

      </div>

      {/* Right side */}
      <div className="relative w-1/2  pt-[30px] flex flex-col items-center justify-center ">
        

        <div className="relative pt-[55px] justify-end top-[26px] left-[300px]">
          <h3 className="font-sansita font-[700] text-[36px] leading-[120%] text-center whitespace-nowrap">
             <span className="block">
                  <span className="text-skooligreen1">Education</span> begins with you. So  
             </span>
             <span className="block">
                  Choose your role to <span className="text-skooligreen1">get started!</span>
             </span>
            </h3>
       </div>

        
        <img
          src={typeimage} 
          alt="Type Page"
          className="relative  left-[351px] justify-end  scale-125 top-[100px]"
        />
      </div>
    </div>
  );
};

export default ChooseType;
