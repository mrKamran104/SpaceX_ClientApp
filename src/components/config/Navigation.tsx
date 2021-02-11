import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../../App";
import NotFound from "./../NotFound";
import LaunchInfoList from "./../Launch";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="launch/:id" element={<LaunchInfoList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Navigation;
