import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs"; 
import Contact from "./pages/Contact";
import RecipeSearch from "./pages/RecipeSearch";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/FAQs" element={<FAQ/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="/404" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/recipe" element={<RecipeSearch/>}/>
      </Routes>
    </div>
  );
}

export default App;
