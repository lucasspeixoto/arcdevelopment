import * as React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/services' element={<div>Services</div>} />
          <Route path='/customsoftware' element={<div>Custom Software</div>} />
          <Route path='/mobileapps' element={<div>Mobile Apps</div>} />
          <Route path='/websites' element={<div>Websites</div>} />
          <Route path='/about' element={<div>About us</div>} />
          <Route path='/therevolution' element={<div>The revolution</div>} />
          <Route path='/contact' element={<div>Contact</div>} />
          <Route path='/estimate' element={<div>Free Estimate</div>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
