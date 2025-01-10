import { Box, ThemeProvider } from '@mui/material'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import { defaultTheme } from './muiTheme'

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
