import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './Pages/Banner';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contacts from './Pages/Contacts';
import reportWebVitals from './reportWebVitals';
<style></style>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
  
    <BrowserRouter>
    <Banner />
    <Routes>
  <Route path="/" element={<Home />}>  
       </Route>
      </Routes>
    <Routes>
    <Route path="/about" element={<About />}>  
         </Route>
        <Route path="/skills" element={<Skills />}>  
         </Route>
         <Route path="/contact" element={<Contacts />}>  
         </Route>
        </Routes>
        </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
