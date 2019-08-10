import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"

const DoubleBogeys = (props) => {
    let scores = props.scores

    const doubleBogeys = scores.map((score,index)=>{
        return score.doubleBogeys
    })
    
    function getDoubleBogeyTotal(){
        let doubleBogeyTotal = 0;
        for(let i = 0; i < doubleBogeys.length; i++){
            let doubleBogey = Number(doubleBogeys[i])
            doubleBogeyTotal = doubleBogeyTotal + doubleBogey
        }
        return doubleBogeyTotal
    }

    function getDoubleBogeysPerRound(){
        let  doubleBogeyTotal = getDoubleBogeyTotal();
        const totalRounds = props.scores.length;
        const doublesPerRound = (doubleBogeyTotal/totalRounds).toPrecision(3);
        return doublesPerRound
    }

    function getDoubleLikelihood(){
        const doublesPerHole = (getDoubleBogeysPerRound()/18).toPrecision(4);
        const doublesPercentage = Math.round(doublesPerHole*100)+"%"
        return doublesPercentage
    }

    return (
        <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total Double Bogeys: {getDoubleBogeyTotal()}</ListGroup.Item>
            <ListGroup.Item variant="success">Double Bogey Per Round: {getDoubleBogeysPerRound()}</ListGroup.Item>
            <ListGroup.Item variant="success">Double Bogey Likelihood {getDoubleLikelihood()}</ListGroup.Item>
        </ListGroup>
        )
}

export default DoubleBogeys;