import { useState } from 'react'

import './App.css'
import Top from './Components/Landing/Top'
import CoursePage from './Components/CourseDetails/CoursePage'
import SignIn from './Components/Signing/SignIn'
import Navbar from './Components/Navbar/Navbar'
import NavbarDashboard from "./Components/Dashboard/Navbar"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import MyAnouncements from './Pages/MyAnouncements'
import Dashboard_users from "./Pages/Dashboard/Dashboard_users"
import Dashboard_courses from "./Pages/Dashboard/Dashboard_courses"
import Dashboard from "./Pages/Dashboard/Dashboard"
import SignUp from './Components/Signing/SignUP'
import GoogleAuth from "./Hooks/GoogleAuth"
import FavouriteCourses from './Pages/FavouriteCourses'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar/> */}
        {/* <NavbarDashboard/> */}

          <Routes>
            <Route path="/" element={<><HomePage /></>} />
            <Route path="/Register" element={<SignUp></SignUp>} />
            <Route path="/login" element={<SignIn></SignIn>} />
            <Route path="/google" element={<GoogleAuth></GoogleAuth>} />
            <Route path="/ControlPanel" element={<MyAnouncements />} />
            <Route path="/Course/:title" element={<CoursePage />} />
            <Route path="/FavouritesCourses" element={<FavouriteCourses />} />
          </Routes>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
            <Route path="/Dashboard/Users" element={<Dashboard_users></Dashboard_users>} />
            <Route path="/Dashboard/Courses" element={<Dashboard_courses></Dashboard_courses>} />
          </Routes>



        {/* <NavbarDashboard />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Top></Top>
                <HomePage />
              </>
            }
          />
          <Route path="/MyAnouncements" element={<MyAnouncements />} />
        </Routes>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
          <Route
            path="/Dashboard/Users"
            element={<Dashboard_users></Dashboard_users>}
          />
          <Route
            path="/Dashboard/Courses"
            element={<Dashboard_courses></Dashboard_courses>}
          />
        </Routes> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
