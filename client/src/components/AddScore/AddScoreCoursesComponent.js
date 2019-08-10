import React from "react";

//create options to pick a course
 
const Courses = (props) => {
    const courses = props.courses;
    //get new array with just course.name = "Lions Municipal"
    let courseNames = courses.map((course,index) => {
        return course.name
    })
    //sort array courseNames alphabetically
    let sortedArray = courseNames.sort();
        return (
            sortedArray.map((course,index) => {
                return (
                    <option key={index} value={course}>{course}</option>
                )
            })
    )
}

export default Courses