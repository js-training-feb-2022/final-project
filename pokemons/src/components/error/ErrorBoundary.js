import { Component } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import picture from '../../assets/Error-pokemon.png'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }


  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: {xs: 1, md: 6} }}>
            <h1>Oops! Something went wrong...</h1>
            <img  
              src={ picture }
              alt='logo'
              style={ {maxWidth: '300px'} }
            />    
          </Box>
        </Container>
      );
    }

    return this.props.children; 
  }
}