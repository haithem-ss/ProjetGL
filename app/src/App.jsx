import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserFieldsPage from "./User/UserFieldsPage";
import SecurityPage from "./User/SecurityPage";
import WebScraper from "./User/WebScraper";
import ProductPage from "./User/Admin/ProductPage";
import EditProductPage from "./User/Admin/EditProductPage";
import Map_app from "./User/Map_app";

import Map from "./User/Map/Map";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<UserFieldsPage />} />
        <Route path="/user/security" element={<SecurityPage />} />
        <Route path="/user/webscraper" element={<WebScraper />} />
        <Route path="/user/cours" element={<ProductPage />} />
        <Route path="/user/cours/edit" element={<EditProductPage />} />
        <Route path="/user/map" element={<Map_app />} />
      </Routes>
    </Router>
  );
};

export default App;
