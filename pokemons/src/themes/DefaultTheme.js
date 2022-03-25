import { createTheme } from '@mui/material/styles';

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: '#ef5350',
      contrastText: '#fff',
    },
    secondary: {
      main: '#EFA350',
      contrastText: '#fff',
    },
    types: {
      normal: {
        main: '#F5F5DC'
      },
      fighting: {
        main: '#FF4040'
      },
      flying: {
        main: '#B964D4'
      },
      poison: {
        main: '#54026E'
      },
      ground: {
        main: '#FFAD40'
      },
      rock: {
        main: '#2E394B'
      },
      bug: {
        main: '#d0e585'
      },
      ghost: {
        main: '#605EC8'
      },
      steel: {
        main: '#525279'
      },
      fire: {
        main: '#feac6f'
      },
      water: {
        main: '#92d3d1'
      },
      grass: {
        main: '#a6e7ba'
      },
      electric: {
        main: '#FFFF00'
      },
      psychic: {
        main: '#CE56B7'
      },
      ice: {
        main: '#5DB4F2'
      },
      dragon: {
        main: '#DE532B'
      },
      dark: {
        main: '#382D29'
      },
      fairy: {
        main: '#EC82C5'
      },
      unknown: {
        main: '#EDFD8C'
      },
      shadow: {
        main: '#2C5353'
      },
    }
  },
});

export { DefaultTheme };