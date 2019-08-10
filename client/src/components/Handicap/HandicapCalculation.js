import React from 'react';
import Card from "react-bootstrap/Card"
import "./HandicapCalculation.css"

const HandicapCalculation = (props) => {
    let scores = props.scores;

    const handicapScores = scores.map(score => {
        return score.handicapScore
    });

    const roundScores = scores.map(score => {
        return score.totalScore;
    })


    function allRounds(){
        let allHandicapRounds = [];
        for(let i = 0; i < roundScores.length; i++){
            allHandicapRounds.push(<li>{roundScores[i]} -</li>)
        }
        return allHandicapRounds;
    }

    function handicapRounds(){
        let currentHandicapRounds = []
        for(let i = 0; i < 20; i++){
            currentHandicapRounds.push(<li>{roundScores[i]}</li>)
        }
        return currentHandicapRounds;
    }

    function displayRound(){
        if(scores.length > 20){
            return handicapRounds();
        } else {
            return allRounds()
        }
    }

    function currentHandicap(scores){
        let total = 0;
        let rounds = 20;
        for(let i =0; i < scores.length; i++){
            if(typeof scores[i] === 'number' )
            total = total + scores[i];
        }
        if(scores.length < 20){
            rounds = scores.length;
        }
        return (total/rounds).toFixed(2);
    }

    return (
        <div className="handicapDiv" >
            <Card className="text-center"  border="success" style={{ width: '600px' }}>
                <Card.Header> Handicap </Card.Header>
                <Card.Body>
                    <Card.Title className="cardTitle">{currentHandicap(handicapScores)}</Card.Title>
                    <Card.Text>{displayRound()}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default HandicapCalculation;
