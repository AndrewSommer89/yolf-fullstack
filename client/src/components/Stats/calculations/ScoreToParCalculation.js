import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"

const ScoreToPar = (props) => {
    const scores = props.scores;

    const scoreToParArray = scores.map((score,index) => {
        return score.scoreToPar;
    })

    function getScoreToParTotal(){
        let totalScoreToPar = 0;
        for(let i = 0; i < scoreToParArray.length; i++){
            let scoreToParElement = Number(scoreToParArray[i]);
            totalScoreToPar = totalScoreToPar + scoreToParElement;
        }
        return totalScoreToPar
    }

    function getAverageScoreToPar(){
        return(getScoreToParTotal()/scoreToParArray.length).toPrecision(4);
    }

    return(
        <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total Score To Par: {getScoreToParTotal()}</ListGroup.Item>
            <ListGroup.Item variant="success">Average Score To Par: {getAverageScoreToPar()}</ListGroup.Item>
        </ListGroup>
    )
}

export default ScoreToPar;