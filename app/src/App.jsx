import { useState } from 'react'

import './App.css'
import CoursePage from './Components/CourseDetails/CoursePage'
import SignIn from './Components/Signing/SignIn'
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
import FirstComponent from "./profil enseignant/FirstComponent"
import UserFieldsPage from "./User/UserFieldsPage";
import SecurityPage from "./User/SecurityPage";
import WebScraper from "./User/WebScraper";
import ProductPage from "./User/Admin/ProductPage";
import EditProductPage from "./User/Admin/EditProductPage";
function App() {
  return (
    <div className="App">

      <BrowserRouter>

          <Routes>
            <Route path="/" element={<><HomePage /></>} />
            <Route path="/Register" element={<SignUp></SignUp>} />
            <Route path="/login" element={<SignIn></SignIn>} />
            <Route path="/google" element={<GoogleAuth></GoogleAuth>} />
            <Route path="/ControlPanel" element={<MyAnouncements />} />
            <Route path="/Course/:title" element={<CoursePage />} />
            <Route path="/FavouritesCourses" element={<FavouriteCourses />} />
            <Route path="/Instructor" element={<FirstComponent />} />
            <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
            <Route path="/Dashboard/Users" element={<Dashboard_users></Dashboard_users>} />
            <Route path="/Dashboard/Courses" element={<Dashboard_courses></Dashboard_courses>} />
            <Route path="/user" element={<UserFieldsPage />} />
            <Route path="/user/security" element={<SecurityPage />} />
            <Route path="/user/webscraper" element={<WebScraper />} />
            <Route path="/user/cours" element={<ProductPage />} />
            <Route path="/user/cours/edit" element={<EditProductPage />} />
          </Routes>

        </BrowserRouter>

      



    </div>
  );
}

export default App;
