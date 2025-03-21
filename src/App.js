import React from "react";
import { BrowserRouter as router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; 
import ChooseType from "./pages/TypePage";
import SignupPageParent from "./pages/signup/SignupPageParent";
import SignupPageStudent from "./pages/signup/SignupPageStudent";
import SignupPageTeacher from "./pages/signup/SignupPageTeacher";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/homepage/HomePage";
import EventsPage from "./pages/homepage/EventsPage"


/*
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/TypePage" element={<ChooseType />} />
      <Route path="/signup/parent" element={<SignupPageParent />} />
      <Route path="/signup/student" element={<SignupPageStudent />} />
      <Route path="/signup/teacher" element={<SignupPageTeacher />} />
      <Route path="/login" element={<LoginPage />} /> 
       <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/HomePage" element={<HomePage />} />
    </Routes>
  );
}

export default App; */


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/EventsPage" element={<EventsPage />} />
      
      </Routes>
  );
}

export default App;

