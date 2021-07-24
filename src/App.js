import React from "react";
//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import signup from "./signup";
import admin from "./admin";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";



const App = () => {
  return (
  
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/admin" component={admin} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;