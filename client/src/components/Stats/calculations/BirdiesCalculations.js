import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"

const Birdies = (props) => {
    let scores = props.scores;

    const birdies = scores.map(score => {
        return score.birdies
    })

    function getBirdieTotal(){
        let  birdieTotal = 0;
        for(let i = 0; i < birdies.length; i++){
            let birdie = Number(birdies[i])
            birdieTotal = birdieTotal + birdie
        }
        return birdieTotal
    }

    function getBirdiesPerRound(){
        return (getBirdieTotal()/props.scores.length).toPrecision(3)
    }

    function getBirdieLikelihood(){
        const birdiePercentage = Math.round((getBirdiesPerRound()/18).toPrecision(1)*100)+"%"
        return birdiePercentage
    }

    return (
        <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total Birdies: {getBirdieTotal()}</ListGroup.Item>
            <ListGroup.Item variant="success">Birdies Per Round: {getBirdiesPerRound()}</ListGroup.Item>
            <ListGroup.Item variant="success">Birdie Likelihood {getBirdieLikelihood()}</ListGroup.Item>
        </ListGroup>
       )
}

export default Birdies