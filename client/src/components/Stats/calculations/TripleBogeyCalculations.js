import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"


const TripleBogeys = (props) => {
    let scores = props.scores

    const tripleBogeys = scores.map((score,index)=>{
        return score.tripleBogeys
    })
    
    function getTripleBogeyTotal(){
        let tripleBogeyTotal = 0;
        for(let i = 0; i < tripleBogeys.length; i++){
            let tripleBogey = Number(tripleBogeys[i])
            tripleBogeyTotal = tripleBogeyTotal + tripleBogey
        }
        return tripleBogeyTotal
    }

    function getTriplesPerRound(){
        let triplesPerRound = getTripleBogeyTotal()/props.scores.length;
        return triplesPerRound.toPrecision(3)
    }

    function getTripleLikelihood(){
        const triplesPerHole = (getTriplesPerRound()/18).toPrecision(4);
        const triplePercentage = Math.round(triplesPerHole*100)+"%"
        return triplePercentage
    }

    return (
        <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total Triple Bogeys: {getTripleBogeyTotal()}</ListGroup.Item>
            <ListGroup.Item variant="success">Triple Bogeys Per Round: {getTriplesPerRound()}</ListGroup.Item>
            <ListGroup.Item variant="success">Triple Bogey Likelihood {getTripleLikelihood()}</ListGroup.Item>
        </ListGroup>
    )
}

export default TripleBogeys;