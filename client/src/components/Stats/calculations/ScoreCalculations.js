import React from 'react'
import ListGroup from "react-bootstrap/ListGroup"

const Scores = (props) => {
    const scores = props.scores;
    
    const totalScores = scores.map((score,index) => {
        return score.totalScore
    })

    function getScoreTotal(){
        let scoreTotal = 0;
        for(let i = 0; i < totalScores.length; i++){
            let totalScoreElement = Number(totalScores[i])
            scoreTotal = scoreTotal + totalScoreElement
        }
        return scoreTotal
    }

    function getAverageScore(){
        return( getScoreTotal()/totalScores.length).toPrecision(4);
    }

    return(
        <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total Strokes: {getScoreTotal()}</ListGroup.Item>
            <ListGroup.Item variant="success">Average Score: {getAverageScore()}</ListGroup.Item>
        </ListGroup>
    )
}

export default Scores;