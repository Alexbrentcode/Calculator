import Calculator from "./components/Calculator";
import { ThemeProvider } from "@emotion/react";
import { createMuiTheme } from "@mui/material";

function App() {


  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Orbitron'
      ]
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
        <Calculator/> 
    </ThemeProvider>
     
    </>
  )
}

export default App;
