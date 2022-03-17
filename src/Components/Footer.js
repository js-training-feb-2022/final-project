import React from "react";
import { Container } from "react-bootstrap";


export default function Footer() {
  return (
    <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
    <Container style={{display: 'flex', justifyContent: 'end', alignItems: 'center', padding: '10px', minHeight: '60px'}}>
      <p className="mb-0">&copy; Tatiana Pavlova 2022</p>
    </Container>
  </Container>
  )
}
