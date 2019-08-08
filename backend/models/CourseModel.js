let mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    id: Number,
    name: String,
    scorecard: String,
    coursePar: Number,
    holes: [
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        },
        {
            hole: Number,
            par: Number
        }
    ]
})

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;