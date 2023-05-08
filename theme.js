import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#347fc4',
      },
      secondary: {
        main: '#ebf5ee',
      },
      third: {
        main: '#191716',
      }
    },
  });
  

export default theme;