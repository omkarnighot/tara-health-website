import { Box, ThemeProvider } from '@mui/material'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import { defaultTheme } from './muiTheme'
import React from "react";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <Box className="w-screen m-0 p-0">
      <LandingPage />
    </Box>
    </ThemeProvider>
  )
}

export default App
