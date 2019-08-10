import React, { Component } from 'react';
import axios from "axios";

import HandicapCalculation from "./HandicapCalculation";

export default class Handicap extends Component {
    state = {
        scores: [],
    }

    componentDidMount(){
        axios.get('http://localhost:3001/api/scores/')
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
        let {scores} = this.state
        let {courses} = this.state
        return (
            <div>
                <h1>Handicap</h1>
                <HandicapCalculation courses={courses} scores={scores} />
            </div>
        )
    }
}

