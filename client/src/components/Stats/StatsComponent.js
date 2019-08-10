import React, { Component } from 'react';
import axios from "axios";
import {Tab,Row,Col,ListGroup }from "react-bootstrap/"

import TotalPutts  from "./calculations/PuttsCalculation";
import Eagles from "./calculations/EaglesCalculations"
import Pars from "./calculations/ParCalculation"
import Birdies from "./calculations/BirdiesCalculations"
import Bogeys from "./calculations/BogeyCalculations";
import DoubleBogeys from "./calculations/DoubleBogeysCalculations"
import TripleBogeys from "./calculations/TripleBogeyCalculations"
import Totals from "./calculations/TotalsCalculation";
import Scores from "./calculations/ScoreCalculations";
import ScoreToPar from "./calculations/ScoreToParCalculation";

export default class Stats extends Component {
    state = {
        scores: []
    }

    componentDidMount(){
        axios.get('api/scores/')
            .then(res => {
                this.setState({
                    scores: res.data
                });
            })
            .catch(function(error){
                console.log(error)
            })
    }

    render() {
        let {scores} = this.state;
        return (
            <div>
                <Tab.Container id="stats-tabs" defaultActiveKey="#totals">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item variant="success" action href="#totals">
                                    Totals
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" action href="#scores">
                                    Average Score
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" action href="#scoreToPar">
                                    Score To Par
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" action href="#putts">
                                    Putts
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" action href="#eagles">
                                    Eagles
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" action href="#birdies">
                                    Birdies
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" action href="#pars">
                                    Pars
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" action href="#bogeys">
                                    Bogeys
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" action href="#doubles">
                                    Double Bogeys
                                </ListGroup.Item>
                                <ListGroup.Item variant="success" action href="#triples">
                                    Triple Bogeys
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#totals">
                                    <Totals scores={scores} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#scores">
                                    <Scores scores={scores} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#scoreToPar">
                                    <ScoreToPar scores={scores} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#putts">
                                    <TotalPutts scores={scores} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#eagles">
                                    <Eagles scores={scores}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#birdies">
                                    <Birdies scores={scores}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#pars">
                                    <Pars scores={scores}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#bogeys">
                                    <Bogeys scores={scores}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#doubles">
                                    <DoubleBogeys scores={scores}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#triples">
                                    <TripleBogeys scores={scores}/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}