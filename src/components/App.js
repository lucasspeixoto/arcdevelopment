import * as React from "react";

import { Header } from "./ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>Hello!
    </ThemeProvider>
  );
}
