import React from 'react';
import ListGroup from "react-bootstrap/ListGroup"

const Pars = (props) => {
    let scores = props.scores

    const pars = scores.map((score,index)=>{
        return score.pars
    })
    
    function getParTotal(){
        let parTotal = 0;
        for(let i = 0; i < pars.length; i++){
            let par = Number(pars[i])
            parTotal = parTotal + par
        }
        return parTotal
    }

    function getParsPerRound(){
        let parsPerRound = getParTotal()/props.scores.length;
        return parsPerRound.toPrecision(3);
    }

    function getParLikelihood(){
        const parsPerHole = (getParsPerRound()/18).toPrecision(4);
        const parPercentage = Math.round(parsPerHole*100)+"%"
        return parPercentage
    }

    return (
        <ListGroup variant="flush">
            <ListGroup.Item variant="success">Total Pars: {getParTotal()}</ListGroup.Item>
            <ListGroup.Item variant="success">Pars Per Round: {getParsPerRound()}</ListGroup.Item>
            <ListGroup.Item variant="success">Pars Likelihood {getParLikelihood()}</ListGroup.Item>
        </ListGroup>
    )
}

export default Pars;