import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/*" element={<DashboardRouter/>}/>
        </Routes>
      </div>
    </Router>
  );
}