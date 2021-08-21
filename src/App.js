import React from "react";
//import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import admin from "./admin";
import about from "./about";
import Userpage from "./Userpage";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Books from "./Books";
import UploadBooks from "./UploadBooks";






const App = () => {
  return (
  
    <AuthProvider>
      <Router>
     
       <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute  path="/update-profile" component={UpdateProfile} />
          <Route  path="/login" component={Login} />
          <Route  path="/signup" component={Signup} />
          <Route  path="/admin" component={admin} />
          <Route  path="/about" component={about}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <PrivateRoute  path="/userpage" component={Userpage} />
          <PrivateRoute  path="/books" component={Books} />
          <PrivateRoute  path="/uploadbooks" component={UploadBooks} />
        </div>
      </Router> 
    </AuthProvider>
 
  );

};

export default App;