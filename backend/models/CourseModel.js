let mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    id: Number,
    name: String,
    scorecard: String,
    coursePar: Number,
    backTeeRating: Number,
    backTeeSlope: Number,
    backTeeYardage: Number,
    middleTeeRating: Number,
    middleTeeSlope: Number,
    middleTeeYardage: Number,
    frontTeeRating: Number,
    frontTeeSlope: Number,
    frontTeeYardage: Number,
    par1: Number,
    par2: Number,
    par3: Number,
    par4: Number,
    par5: Number,
    par6: Number,
    par7: Number,
    par8: Number,
    par9: Number,
    par10:Number,
    par11:Number,
    par12:Number,
    par13:Number,
    par14:Number,
    par15:Number,
    par16:Number,
    par17:Number,
    par18:Number,
})

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;