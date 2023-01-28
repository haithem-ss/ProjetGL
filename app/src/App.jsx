import { useState } from 'react'
import * as React from 'react'

import './App.css'
import Top from './Components/Landing/Top'
import CoursePage from './Components/CourseDetails/CoursePage'
import SignUp from './Components/Signing/SignUp'
import Navbar from './Components/Navbar/Navbar'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from '@chakra-ui/react'
import HomePage from './Pages/HomePage'
import MyAnouncements from './Pages/MyAnouncements'
function App() {

  return (
    <div className="App">



      <HomePage />



    </div>
  )
}

export default App