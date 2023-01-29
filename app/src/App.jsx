import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserFieldsPage from "./User/UserFieldsPage";
import SecurityPage from "./User/SecurityPage";
import WebScraper from "./User/WebScraper";
import ProductPage from "./User/Admin/ProductPage";
import EditProductPage from "./User/Admin/EditProductPage";
import { Container } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import MyAnouncements from "./Pages/MyAnouncements";
import { useState } from "react";
import * as React from "react";
import "./App.css";
import Top from "./Components/Landing/Top";
import CoursePage from "./Components/CourseDetails/CoursePage";
import SignUp from "./Components/Signing/SignUP";
import SignIn from "./Components/Signing/SignIn";
import Navbar from "./Components/Navbar/Navbar";
import NavbarDashboard from "./Components/Dashboard/Navbar";
import "./App.css";
import Dashboard_users from "./Pages/Dashboard/Dashboard_users";
import Dashboard_courses from "./Pages/Dashboard/Dashboard_courses";
import Dashboard from "./Pages/Dashboard/Dashboard";
const App = () => {
  return (
    <div className="App">
      <Container maxW="90vw" margin="2rem auto">
        <Router>
          <NavbarDashboard />

          <Routes>
            <Route path="/user" element={<UserFieldsPage />} />
            <Route path="/user/security" element={<SecurityPage />} />
            <Route path="/user/webscraper" element={<WebScraper />} />
            <Route path="/user/cours" element={<ProductPage />} />
            <Route path="/user/cours/edit" element={<EditProductPage />} />
          </Routes>
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
          </Routes>
        </Router>
      </Container>
    </div>
  );
};

export default App;
