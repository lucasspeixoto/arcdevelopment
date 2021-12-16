import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./ui/Header/index.js";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import { Footer } from "./ui/Footer/index";
import { Locations } from "../helpers/utils.js";
//import { LandingPage } from "./landingPage/index.js";
import { LandingPage } from "./../pages/landingPage/index";
import { Services } from "./../pages/servicesPage/index";
import CustomSoftware from "../pages/customSoftware/index.js";
import MobileApps from "../pages/mobileApp/index.js";
import Websites from "../pages/website/index.js";
import { Revolution } from "../pages/revolution/index.js";
import { About } from "../pages/about/index.js";

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
          <Route
            path='/services'
            element={
              <Services
                value={value}
                setValue={setValue}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            }
          />
          <Route
            path='/customsoftware'
            element={
              <CustomSoftware
                setValue={setValue}
                setSelectedItem={setSelectedItem}
              />
            }
          />
          <Route
            path='/mobileapps'
            element={
              <MobileApps
                setValue={setValue}
                setSelectedItem={setSelectedItem}
              />
            }
          />
          <Route
            path='/websites'
            element={
              <Websites setValue={setValue} setSelectedItem={setSelectedItem} />
            }
          />
          <Route path='/therevolution' element={<Revolution />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<div>Contact</div>} />
          <Route path='/estimate' element={<div>Free Estimate</div>} />
        </Routes>
        <Footer setValue={setValue} setSelectedItem={setSelectedItem} />
      </BrowserRouter>
    </ThemeProvider>
  );
}
