import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"

const Eagles = (props) => {
    let scores = props.scores

    const eagles = scores.map((score,index)=>{
        return score.eagles
    })
    
    function getEagleTotal(){
        let eaglesTotal = 0;
        for(let i = 0; i < eagles.length; i++){
            let eagle = Number(eagles[i])
            eaglesTotal = eaglesTotal + eagle
        }
        return eaglesTotal
    }

    function getEaglesPerRound(){
        let eagleTotal = getEagleTotal();
        const totalRounds = props.scores.length;
        const eaglesPerRound = (eagleTotal/totalRounds);
        return eaglesPerRound
    }

    function getEagleLikelihood(){
        const eaglesPerHole = (getEaglesPerRound()/18).toPrecision(3);
        return eaglesPerHole*100+"%"
    }

    return (
        <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total Eagles: {getEagleTotal()}</ListGroup.Item>
            <ListGroup.Item variant="success">Eagles Per Round: {getEaglesPerRound()}</ListGroup.Item>
            <ListGroup.Item variant="success">Eagles Likelihood {getEagleLikelihood()}</ListGroup.Item>
        </ListGroup>
    )
}

export default Eagles;