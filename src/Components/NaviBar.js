import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a {
    color: #adb1b8;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
    margin-right: 15px;
  }
`
export default function NaviBar() {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="position-fixed fixed-top">
        <Container>
          <Navbar.Brand>Pokedex</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Item><Link to="/">Home</Link></Nav.Item>  
              <Nav.Item><Link to="/pokemons">Caught Pokemons</Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  )
}
