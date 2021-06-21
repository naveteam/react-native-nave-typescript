import { DefaultTheme } from 'styled-components/native';

export default {
  dark: false,
  colors: {
    primary: 'rgb(175, 82, 222)',
    secondary: 'rgb(94, 92, 230)',
    background: 'rgb(242, 242, 242)',
    onPrimary: 'rgb(242, 242, 242)',
    onSecondary: 'rgb(242, 242, 242)',
    onBackground: 'rgb(28, 28, 30)',
    error: '#D50000',
    warning: '#F49F14',
    success: '#43A047',
    gray: {
      n50: '#FAFAFA',
      n100: '#F5F5F5',
      n200: '#EEEEEE',
      n300: '#E0E0E0',
      n400: '#BDBDBD',
      n500: '#9E9E9E',
      n600: '#757575',
      n700: '#616161',
      n800: '#424242',
      n900: '#212121'
    }
  }
} as DefaultTheme;
