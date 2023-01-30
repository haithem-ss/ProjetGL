import { useState } from 'react'
import * as React from 'react'

import './App.css'
import Top from './Components/Landing/Top'
import CoursePage from './Components/CourseDetails/CoursePage'
import SignUp from './Components/Signing/SignUP'
import SignIn from './Components/Signing/SignIn'
import Navbar from './Components/Navbar/Navbar'
import NavbarDashboard from "./Components/Dashboard/Navbar"
import './App.css'
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage'
import MyAnouncements from './Pages/MyAnouncements'
import Dashboard_users from "./Pages/Dashboard/Dashboard_users"
import Dashboard_courses from "./Pages/Dashboard/Dashboard_courses"
import Dashboard from "./Pages/Dashboard/Dashboard"
function App() {

  return (
    <div className="App">



      <HomePage/>



    </div>
  )
}

export default App