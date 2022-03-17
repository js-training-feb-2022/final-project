import React from "react";
import { Col, Container, Row } from "react-bootstrap";


export default function PokemonInfo(props) {
  
  return (
    <Container className="mt-5" style={{minHeight: 'calc(100vh - 109px)'}}>
      <Row>
        <Col md={7}>
          <img src={props.card.picture} alt={`Pokemon ${props.card.name}`} style={{width: '70%'}} />
        </Col>
        <Col md={5}>
          <h1 className="text-primary mt-5">{props.card.name}</h1>
          <p><span style={{fontWeight: 'bold'}}>ID:</span> {props.card.id}</p>
          <p><span style={{fontWeight: 'bold'}}>Weight:</span> {props.card.weight}</p>
          <p><span style={{fontWeight: 'bold'}}>Current Status: </span> 
            {props.card.catchStatus.status ? `caught ${props.card.catchStatus.date}` : 'uncaught' }</p>
          <Row>
            <Col md={6}>
              <h4>Abilities:</h4>
              <ul>
                {props.card.abilities.map((ability, index) => {
                  return (<li key={index + 1}>{ability.ability.name}</li>);
                })}
              </ul>
            </Col>
            <Col md={6}>
              <h4>Types:</h4>
              <ul>
                {props.card.types.map((type, index) => {
                  return (<li key={index +1}>{type.type.name}</li>);
                })}
              </ul>    
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}