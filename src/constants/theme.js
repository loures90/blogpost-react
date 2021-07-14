import { createTheme } from '@material-ui/core/styles';
import { neutralColor, primaryColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    text: {
      main: neutralColor,
    },
  },
});
export default theme;