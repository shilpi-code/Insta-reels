import React from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Feed from "./Components/Feed";
import Profile from "./Components/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact element={<PrivateRoute />}>
            <Route exact path="/profile/:id" element={<Profile />} />
          </Route>
          <Route exact element={<PrivateRoute />}>
            <Route exact path="/" element={<Feed />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
