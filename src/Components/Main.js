import React from "react";
import CardList from "./CardList";
import { Button } from "react-bootstrap";


export default function Main(props) {
  
  return (
    <>
      <CardList cards={props.cards} onCardClick={props.onCardClick} onCatchClick={props.onCatchClick} />
      <Button variant="secondary" className="mx-auto mb-4 mt-4 lg d-flex" onClick={props.onLoadMore}>Load More</Button>
    </>
  )
}
