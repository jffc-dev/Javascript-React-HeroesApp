import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login"><LoginScreen/></Route>
          <Route path="/"><DashboardRouter/></Route>
        </Switch>
      </div>
    </Router>
  );
}