import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"


const TotalPutts = (props) => {
    let scores = props.scores

    const putts = scores.map((score,index)=>{
        return score.totalPutts
    })
    
    function getPuttsTotal(){
        let totalPutts = 0;
        for(let i = 0; i < putts.length; i++){
            let putt = Number(putts[i])
            totalPutts = totalPutts + putt
        }
        return totalPutts
    }

    function getPuttsPerRound(){
        return(getPuttsTotal()/props.scores.length).toPrecision(3);
    }

    function getPuttsPerHole(){
        return (getPuttsPerRound()/18).toPrecision(4)
    }
    return (
        <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total Putts: {getPuttsTotal()}</ListGroup.Item>
            <ListGroup.Item variant="success">Putts Per Round: {getPuttsPerRound()}</ListGroup.Item>
            <ListGroup.Item variant="success">Putts Per Hole: {getPuttsPerHole()}</ListGroup.Item>
        </ListGroup>
    )
}

export default TotalPutts;