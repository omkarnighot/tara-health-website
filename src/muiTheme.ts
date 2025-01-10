/* eslint-disable quote-props */
import { Theme, createTheme } from "@mui/material/styles";

export const defaultTheme: Theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        // disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          height: "48px",
          padding: "0 1.25rem",
          letterSpacing: "0.34px",
          textTransform: "none",
          fontWeight: 600, // Set the font weight to semibold
          background: "linear-gradient(90deg, #1A3E1F 0%, #45A452 100%)", // Add your gradient here
          fontFamily: "Open Sans"
        },
      }
    },
  }
});

