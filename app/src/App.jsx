import { useState } from 'react'
import * as React from 'react'

import './App.css'
import Top from './Components/Landing/Top'
import CoursePage from './Components/CourseDetails/CoursePage'
import SignIn from './Components/Signing/SignIn'
import Navbar from './Components/Navbar/Navbar'

import { BrowserRouter ,Routes, Route} from "react-router-dom";
import {Container} from '@chakra-ui/react'
import HomePage from './Pages/HomePage'
import MyAnouncements from './Pages/MyAnouncements'
function App() {

  return (
    <div className="App">
      <Container maxW="90vw" margin="2rem auto" >
      <BrowserRouter>
        
        <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/MyAnouncements" element={ <MyAnouncements/> } />
      </Routes>
        </BrowserRouter>

      </Container>

    </div>
  )
}

export default App
