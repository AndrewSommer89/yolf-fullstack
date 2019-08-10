import React, { Component } from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Courses from "../AddScore/AddScoreCoursesComponent";

export default class EditScore extends Component {
    constructor(props){
        super(props);
        //set the state to nothing
        this.state = {
            course: "",
            teebox: "",
            totalScore: 0,
            totalPutts: 0,
            scoreToPar: 0,
            holeInOnes: 0,
            eagles: 0,
            birdies: 0,
            pars: 0,
            bogeys: 0,
            doubleBogeys: 0,
            tripleBogeys: 0,
            courses:[]
        }
        //bind methods
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getScoreDetails();
        this.getCourses();
    }

    getScoreDetails(){
        axios.get("http://localhost:3001/api/scores/"+this.props.match.params.id)
            .then(response => {
                this.setState({
                    date: response.data.date,
                    course: response.data.course,
                    teebox: response.data.teebox,
                    totalScore: response.data.totalScore,
                    totalPutts: response.data.totalPutts,
                    scoreToPar: response.data.scoreToPar,
                    holeInOnes: response.data.holeInOnes,
                    eagles: response.data.eagles,
                    birdies: response.data.birdies,
                    pars: response.data.pars,
                    bogeys: response.data.bogeys,
                    doubleBogeys: response.data.doubleBogeys,
                    tripleBogeys: response.data.tripleBogeys
                })
            })
            .catch(function(error){
                console.log(error);
            })
    }

    getCourses(){
        axios.get('http://localhost:3001/api/courses')
            .then(res => {
                this.setState({
                    courses: res.data
                });
            })
            .catch(function(error){
                console.log(error)
            })
    }

    handleChange(e){
        //get the target "name" and set the state of the name to the value in the input box
        this.setState({[e.target.name]: e.target.value})
    }

    
    onSubmit(e){
        e.preventDefault();
        let {courses} = this.state;
        let course = this.state.course;
        let teebox = this.state.teebox;
        let roundScore = this.state.totalScore;

        function findCourseByName(array,key,value){
            for(let i = 0; i < array.length; i++){
                if(array[i][key] === value ){
                    return array[i];
                }
            }
        }
        
        let roundCourse = findCourseByName(courses,"name",course);

        function getHandicapScore(){
            if(teebox === "Back Tees"){
                let slope = roundCourse['backTeeSlope'];
                let rating = roundCourse['backTeeRating'];
                let handicapScore = (roundScore-rating)*113/slope;
                return handicapScore;
            } else if(teebox === "Middle Tees"){
                let slope = roundCourse['middleTeeSlope'];
                let rating = roundCourse['middleTeeRating'];
                let handicapScore = (roundScore-rating)*113/slope;
                return handicapScore;
            } else if(teebox === "Front Tees"){
                let slope = roundCourse['frontTeeSlope'];
                let rating = roundCourse['frontTeeRating'];
                let handicapScore = (roundScore-rating)*113/slope
                return handicapScore
            }
        }

        let handicapScore = getHandicapScore();
        const score = {
            date: this.state.date,
            course: this.state.course,
            totalScore: this.state.totalScore,
            handicapScore: handicapScore,
            totalPutts: this.state.totalPutts,
            scoreToPar: this.state.scoreToPar,
            eagles: this.state.eagles,
            birdies: this.state.birdies,
            pars: this.state.pars,
            bogeys: this.state.bogeys,
            doubleBogeys: this.state.doubleBogeys,
            tripleBogeys: this.state.tripleBogeys
        };
        console.log(score)
        axios.post("http://localhost:3001/api/scores/update/"+this.props.match.params.id,score)
            .then(res=> console.log(res.data));
        
        this.props.history.push("/scores");
    }

    render(){
        let {courses} = this.state;
        return(
            <div>
                <h3>Update Score</h3>
                <Form className="addScoreForm" onSubmit={this.onSubmit} onChange={this.handleChange}>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col}>
                            <Form.Label>Course</Form.Label>
                            <Form.Control
                                name="course"
                                as="select"
                            >
                                <option defaultValue>{this.state.course}</option>
                                <Courses courses={courses} />
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col}>
                            <Form.Label>Teebox</Form.Label>
                            <Form.Control
                                name="teebox"
                                as="select"
                            >
                                <option defaultValue>{this.state.teebox}</option>
                                <option value="Back Tees">Back Tees</option>
                                <option value="Middle Tees">Middle Tees</option>
                                <option value="Front Tees">Front Tees</option>
                            </Form.Control>
                        </Form.Group>

                    </Form.Row>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group as={Col}>
                            <Form.Label>Total Score</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.totalScore}
                                name="totalScore"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Total Putts</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.totalPutts}
                                name="totalPutts"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Score To Par</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.scoreToPar}
                                name="scoreToPar"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Eagles</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.eagles}
                                name="eagles"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Birdies</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.birdies}
                                name="birdies"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Pars</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.pars}
                                name="pars"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Bogeys</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.bogeys}
                                name="bogeys"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Double Bogeys</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.doubleBogeys}
                                name="doubleBogeys"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Triple Bogeys</Form.Label>
                            <Form.Control
                                className="formInput"
                                type="number"
                                value={this.state.tripleBogeys}
                                name="tripleBogeys"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" size="lg" block type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}