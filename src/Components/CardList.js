import React from "react";
import { Container, Row } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

export default function CardList(props) {

  return (
    <Container style={{minHeight: 'calc(100vh - 109px)', display: 'grid'}}  className="mt-5" >
      <Row>
        {props.cards.map((card) => {
          return (<PokemonCard key={card.id} card={card} hideBtn={props.hideBtn} onCardClick={props.onCardClick} 
                               onButtonClick={props.onCatchClick} /> )
        })}
      </Row>
    </Container>
  )
}
