import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table'
import "./Scores.css"

const Score = props => (
    <tr>
        <td>{props.score.date}</td>
        <td>{props.score.course}</td>
        <td>{props.score.totalScore}</td>
        <td>{props.score.totalPutts}</td>
        <td>{props.score.scoreToPar}</td>
        <td>{props.score.eagles}</td>
        <td>{props.score.birdies}</td>
        <td>{props.score.pars}</td>
        <td>{props.score.bogeys}</td>
        <td>{props.score.doubleBogeys}</td>
        <td>{props.score.tripleBogeys}</td>
        <td>
            <Link to={"/scores/edit/"+props.score._id}>Edit</Link>
        </td>
    </tr>
)
export default class Scores extends Component {
    constructor(props){
        super(props);
        //initialize state with empty scores array
        this.state = {scores: []};
    }

    //retrieve the scores data from database
    componentDidMount(){
        //acces "/scores" endpoint
        axios.get('http://localhost:3001/api/scores/')
            .then(response => {
                //assign data from endpoint to the scores property
                this.setState({scores: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:3001/api/scores/')
            .then(response => {
                this.setState({scores: response.data});
            })
            .catch(function (error){
                console.log(error)
            })
    }

    //create array of all scores
    scores() {
        return this.state.scores.reverse().map(function(score,i){
            return <Score score={score} key={i} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Scores</h3>
                <Table  striped hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Course</th>
                            <th>Round Score</th>
                            <th>Round Putts</th>
                            <th>Score to Par</th>
                            <th>Eagles</th>
                            <th>Birdies</th>
                            <th>Pars</th>
                            <th>Bogeys</th>
                            <th>Double Bogeys</th>
                            <th>Triple Bogeys</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.scores() }
                    </tbody>
                </Table>
            </div>
        )
    }
}