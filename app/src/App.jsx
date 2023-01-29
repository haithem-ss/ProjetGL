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
const App = () => {
  return (
    <div className="App">
      <Container maxW="90vw" margin="2rem auto">
        <Router>
          <Routes>
            <Route path="/user" element={<UserFieldsPage />} />
            <Route path="/user/security" element={<SecurityPage />} />
            <Route path="/user/webscraper" element={<WebScraper />} />
            <Route path="/user/cours" element={<ProductPage />} />
            <Route path="/user/cours/edit" element={<EditProductPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/MyAnouncements" element={<MyAnouncements />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
};

export default App;
