import React from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Feed from "./Components/Feed";
import {AuthProvider} from './Context/AuthContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
     <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
