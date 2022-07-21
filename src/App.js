import { Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Example from "./components/banner";
import BasicPagination from "./components/banner/page";
import NestedGrid from "./components/banner/cards";


function App() {
  useEffect(() => {
    document.title = "React Material UI- Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
          <Appbar />
        <Example /> <br /> <br />
        
        {/* 
      <BasicPagination />
      <Appbar />
     */}
        <NestedGrid />
        {/* 
         Promotions
         title
         Products
         footer
         searchbox
         appdrawer
         */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
