import React, { useState } from "react";
import logo from "../assets/logo.png";
import login from "../assets/Login.png";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";




const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData); // Call API function
      if (response.success) {
        navigate("/home"); // its not working for now untill fatima finish
      } else {
        setError(response.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      setError("Login failed. Please try again.");
    }
  };
 


  return (
    <div className="flex relative h-screen pl-10 bg-white">
        {/* Left */}
        <div className="w1/2 relative " > 
          
          <div className=" relative  top-[136px] left-[119px]  ">
              <h2 className="font-poppins font-[600] text-[57px] leading-[120%] "> 
                log <span className="text-skooligreen1" > in </span>
              </h2>
          </div>
          
          <img src={logo} alt="logo" className="absolute pl-[30px] pt-[3px] top-[145px] left-[494px] scale-125 " />
        
         <form 
           onSubmit={handleSubmit} 
           className="relative flex gap-[35px] flex-col left-[119px] top-[240px] ">
           <div className="relative items-center justify-center">
            <label className="absolute px-2 font-roboto -top-3 left-[34px] text-[19px] bg-white  font-[400] text-black56 text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)]">
            email
            </label>
                 <input 
                   type="text" 
                   name="email"
                   value={formData.email}
                    onChange={handleChange}
                    required
                    className=" w-[520px] h-[55px] p-3 border-[3px] shadow-labelShadow  border-[#00000024] items-center justify-center rounded-[8px] focus:border-skooligreen1 focus:outline-none "    />
           </div>

           <div className="relative items-center justify-center">
             <label className="absolute font-roboto -top-3 left-[34px] text-[18px] bg-white px-2 font-[400] text-black56 text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)]">
               Password
             </label>
                  <input
                     type="password" 
                     name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                     className=" w-[520px] h-[55px] p-3 border-[3px] shadow-labelShadow  border-[#00000024] items-center justify-center rounded-[8px] focus:border-skooligreen1 focus:outline-none "    />
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

              <button 
                type="submit"
                className= "relative top-[60px] w-[520px] h-[60px] bg-skooligreen1 text-white  rounded-[8px]  hover:bg-skooligreen2 x font-inter font-[700] text-[32px] leading-[100%] ">
                   Log in 
              </button>

          

          <div className="relative top-[40px] flex items-center  w-[520px] justify-center  my-4">
            <div className="flex-1 font-roboto border-t-4  border-black25"></div>
                <h2 className="px-4 font-roboto font-medium  text-[19px] leading-6 text-black56  ">
                If You don't have an account
                </h2>
            <div className="flex-1 font-roboto border-t-4   border-black25"></div>
           </div>
            
           

          
          
          <button
            onClick={() => navigate("/TypePage")}
            className="relative top-[15px] w-[520px] h-[60px] border-[2px] border-black25 text-black56 rounded-[8px] font-roboto font-[400] text-[24px] leading-[28px] bg-transparent">
            Create an account
           </button>


         </form>
  
      </div>

             {/* Right */}
        <div className="relative   w-1/2">
        

        <div className="relative pt-[25px] pl-[40px] justify-end top-[86px] left-[190px]">
          <h3 className="font-sansita font-[700] text-[36px] leading-[120%] text-center whitespace-nowrap">
             <span className="block">
                  <span className="text-skooligreen1">Welcome</span> Back  ! 
             </span>
             <span className="block tracking-[0.04em] ">
                  Access Your <span className="text-skooligreen1"> Account. </span>
             </span>
            </h3>
       </div>

        
        <img
          src={login} 
          alt="Login"
          className="relative justify-end pl-[100px] left-[190px] scale-125 top-[150px]"
        />
      </div>
      
    </div>
  );
};

export default LoginPage;
