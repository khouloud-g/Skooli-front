import React, { useState } from "react";
import illustration from "../../assets/signup-image.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api";



const SignupPageTeacher = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    Teachinglevel: "", 
    subject: "", 
  });

  const [error, setError] = useState(null);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      
      return;
    }

    // matching with the backend
    const formattedData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      password: formData.password,
      role: "teacher",
      level: formData.Teachinglevel,
      subject: formData.subject,
    };

    try {
      await registerUser(formattedData);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
      alert("Signup failed: " + (error.response?.data?.message || "Unknown error"));
    }
  };
  return (
    <div className="flex h-[832px] w-[1280px] bg-white  relative">

    <div className="flex-1  pl-10 relative ">
      {/* Left  */}
      
      <div className=" relative top-[105px] left-[74px] items-center justify-center   ">
        <h2 className="pt-[10px] font-poppins font-semibold text-[50px]  leading-[120%]  ">
          Create <span className= " text-skooligreen1 ">Account</span>
        </h2>
        </div>
        <form 
         onSubmit={handleSubmit}
         className="absolute pt-[25px] top-[205px] pl-10 left-[74px] flex flex-col gap-[25px]  ">
          <div className="relative flex gap-[30px] items-center justify-center ">
            <div className=" items-center justify-center ">
              <label className="absolute font-roboto -top-3 left-[34px] text-[18px] bg-white px-1 font-[400] text-labelGray text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)]">
                First Name
                </label>
                 <input 
                   type="text"
                   name="firstName"
                   value={formData.firstName}
                   onChange={handleChange}
                   className="w-[350px] h-[60px] p-3 text-[18px] border-[3px] border-[#00000024] items-center justify-center rounded-[8px] focus:border-skooligreen1 focus:outline-none" 
                 />
            </div>
            <div className="relative w-full items-center justify-center">
              <label className="absolute font-roboto -top-3 left-[34px] text-[17px] bg-white px-1 font-[400] text-labelGray text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)]">
                Last Name
              </label>
              <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-[350px] h-[60px] p-3 text-[18px] border-[3px] border-[#00000024] rounded-[8px] items-center justify-center focus:border-skooligreen1 focus:outline-none"
                  />
            </div>
          </div>
          <div className="relative w-full items-center justify-center">
          <label className="absolute font-roboto -top-3 text-[17px] left-[34px] bg-white px-1 font-[400] text-labelGray text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.2)]">
              Email
            </label>
            <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[730px] h-[60px] p-3 text-[18px] border-[3px] border-[#00000024] rounded-[8px] focus:border-skooligreen1 focus:outline-none" 
                  />
          </div>
          <div className="flex gap-[30px]">
            <div className="relative w-full items-center justify-center">
            <label className="absolute font-roboto -top-3 left-[34px] text-[17px] bg-white px-1 font-[400] text-labelGray text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)]">
                Password
              </label>
              <input
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     className="w-[350px] h-[60px] p-3 text-[18px] border-[3px] border-[#00000024] rounded-[8px] focus:border-skooligreen1 focus:outline-none"
                    />
            </div>
            <div className="relative w-full">
            <label className="absolute -top-3 left-[34px] text-[17px] bg-white px-1 font-[400] text-labelGray text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)]">
                Confirm Password
              </label>
              <input 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-[350px] h-[60px] p-3 text-[18px] border-[3px] border-[#00000024] rounded-[8px] focus:border-skooligreen1 focus:outline-none"
                  />
                   {error && <p className= "text-gray-500 pl-3 text-sm">{error}</p>}
            </div>
          </div>
          
          <div className="flex gap-[30px]">
            <div className="relative w-full items-center justify-center">
            <label className="absolute -top-3 left-[34px] text-[17px] bg-white px-1 font-[400] text-labelGray text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)]">
                Teaching Level
              </label>
                <input 
                   type="text" 
                   name="Teachinglevel"
                   value={formData.teachingLevel}
                   onChange={handleChange}
                   className="w-[350px] h-[60px] p-3 border-[3px] border-[#00000024] rounded-[8px] focus:border-skooligreen1 focus:outline-none" />
            </div>
            <div className="relative w-full">
            <label className="absolute -top-3 left-[34px] text-[17px] bg-white px-1 font-[400] text-labelGray text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)]">
                Subject
              </label>
                 <input 
                 type="text"
                 name="subject"
                 value={formData.subject}
                 onChange={handleChange}
                 className="w-[350px] h-[60px] p-3 border-[3px] border-[#00000024] rounded-[8px] focus:border-skooligreen1 focus:outline-none" />
            </div>
          </div>


          <button className= "relative top-[10px] w-[730px] h-[60px] bg-skooligreen1 text-white px-8 py-15 rounded-[12px]  hover:bg-skooligreen2 shadow-labelShadow font-inter font-[700] text-[32px] leading-[100%] ">
            Create Account
          </button>
              <p
               type="submit"
               className="relative  w-[300px] h-[14px] left-[5px] top-[10px] font-[400] text-labelGray text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)] ">
            Already have an account?  
            <span 
               onClick={() => navigate("/login")}  
               className="relative w-[73px] h-[22px] left-[7px] text-skooligreen1 cursor-pointer">
               Login
             </span>
          </p>
        </form>
        </div>
      

      {/* Right  */}
      <div className="relative flex flex-1 justify-center">
  
  <div className="absolute top-[86px] left-[530px]">
    <h3 className="font-poppins font-semibold text-[42px] leading-[120%] whitespace-nowrap">
      Welcome to
    </h3>
  </div>

 
  <img
    src={logo}
    alt="logo"
    className="absolute top-[150px] left-[600px] scale-125 "
  />

  
  <img
    src={illustration}
    alt="Illustration"
    className="absolute top-[240px] scale-110  left-[350px] "
  />
</div>
      </div>
      
  );
};

export default SignupPageTeacher
;


