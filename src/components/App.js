import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./ui/Header/index.js";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import { Footer } from "./ui/Footer/index";
import { Locations } from "../helpers/utils.js";
//import { LandingPage } from "./landingPage/index.js";
import { LandingPage } from './../pages/landingPage/index';
import { Services } from './../pages/servicesPage/index';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [value, setValue] = useState(Locations[window.location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Routes>
          <Route
            path='/'
            element={
              <LandingPage
                setValue={setValue}
                setSelectedItem={setSelectedItem}
              />
            }
          />
          <Route path='/services' element={<Services  value={value}
          setValue={setValue}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}/>} />
          <Route path='/customsoftware' element={<div>Custom Software</div>} />
          <Route path='/mobileapps' element={<div>Mobile Apps</div>} />
          <Route path='/websites' element={<div>Websites</div>} />
          <Route path='/about' element={<div>About us</div>} />
          <Route path='/therevolution' element={<div>The revolution</div>} />
          <Route path='/contact' element={<div>Contact</div>} />
          <Route path='/estimate' element={<div>Free Estimate</div>} />
          <Route
            path='/customsoftware'
            element={<div>Custom Software Development</div>}
          />
          <Route
            path='/mobileapps'
            element={<div>Android/iOS App Developmentt</div>}
          />
          <Route path='/websites' element={<div>Website Development</div>} />
          <Route />
        </Routes>
        <Footer setValue={setValue} setSelectedItem={setSelectedItem} />
      </BrowserRouter>
    </ThemeProvider>
  );
}
