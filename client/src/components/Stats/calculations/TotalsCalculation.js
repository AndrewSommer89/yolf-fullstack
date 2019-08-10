import React from "react"
import ListGroup from "react-bootstrap/ListGroup"

const Totals = (props) => {
    let roundsPlayed = props.scores.length;
    let holesPLayed = roundsPlayed * 18;
    return (
        <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total Rounds Played: {roundsPlayed}</ListGroup.Item>
            <ListGroup.Item variant="success">Total Holes Played: {holesPLayed}</ListGroup.Item>
        </ListGroup>
    )
}

export default Totals;