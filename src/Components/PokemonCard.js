import React from "react";
import { Card, Button, Col, } from "react-bootstrap";

export default function PokemonCard(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleButtonClick() {
    props.onButtonClick(props.card);
  }
  
  return (
    <Col>
      <Card  style={{width: '270px', margin: '20px 10px', backgroundColor: '#F8F8FF'}}>
        <Card.Body onClick={handleClick}>
        <Card.Img variant='top' src={props.card.picture} alt='Pokemon Picture' />
          <Card.Title>{props.card.name}</Card.Title>
          <Card.Text>ID: {props.card.id}</Card.Text>
        </Card.Body>
        <Button className={props.hideBtn === true? 'd-none' : ''} variant='primary' onClick={handleButtonClick} disabled={props.card.catchStatus.status ? true : false}>Catch</Button>
      </Card>
    </Col>
  );  
}
