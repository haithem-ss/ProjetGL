import { useState } from "react";
import * as React from "react";

import "./App.css";
// import Top from "./Components/Landing/Top";
// import CoursePage from "./Components/CourseDetails/CoursePage";
// import SignUp from "./Components/Signing/SignUP";
// import SignIn from "./Components/Signing/SignIn";
// import Navbar from "./Components/Navbar/Navbar";
// import NavbarDashboard from "./Components/Dashboard/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import MyAnouncements from "./Pages/MyAnouncements";
// import Dashboard_users from "./Pages/Dashboard/Dashboard_users";
// import Dashboard_courses from "./Pages/Dashboard/Dashboard_courses";
// import Dashboard from "./Pages/Dashboard/Dashboard";
import UserFieldsPage from "./User/UserFieldsPage";
import SecurityPage from "./User/SecurityPage";
import WebScraper from "./User/WebScraper";
import ProductPage from "./User/Admin/ProductPage";
import EditProductPage from "./User/Admin/EditProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar/> */}
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
        <Routes>
          <Route path="/user" element={<UserFieldsPage />} />
          <Route path="/user/securit" element={<SecurityPage />} />
          <Route path="/user/webscraper" element={<WebScraper />} />
          <Route path="/user/cours" element={<ProductPage />} />
          <Route path="/user/cours/edit" element={<EditProductPage />} />
        </Routes>
      </BrowserRouter>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
