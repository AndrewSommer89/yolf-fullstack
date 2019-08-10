let Course = require("../models/CourseModel");
var ObjectId = require('mongodb').ObjectID;

exports.list = function(req,res){
    Course.find(function(err,courses){
        if(err) return console.error(err);
        return res.json(courses)
    })
}

exports.show = function(req,res){
    let id = ObjectId(req.params.id);
    Course.findById(id,function(err,course){
        if(err) return console.error(err)
        return res.json(course)
    })
}

exports.find = function(req,res){
    Course.findOne({"name": req.params.course},function(err,course){
        if(err) return console.error(err)
        return res.json(course)
    })
}


exports.create = function(req,res){
    let body = req.body;
    let course = new Course({
        id: body.id,
        name: body.name,
        scorecard: body.scorecard,
        coursePar: body.coursePar,
        backTeeRating: body.backTeeRating,
        backTeeSlope: body.backTeeSlope,
        backTeeYardage: body.backTeeYardage,
        middleTeeRating: body.middleTeeRating,
        middleTeeSlope: body.middleTeeSlope,
        middleTeeYardage: body.middleTeeYardage,
        frontTeeRating: body.frontTeeRating,
        frontTeeSlope: body.middleTeeSlope,
        frontTeeYardage: body.middleTeeYardage,
        par1: body.par1,
        par2: body.par2,
        par3: body.par3,
        par4: body.par4,
        par5: body.par5,
        par6: body.par6,
        par7: body.par7,
        par8: body.par8,
        par9: body.par9,
        par10: body.par10,
        par11: body.par11,
        par12: body.par12,
        par13: body.par13,
        par14: body.par14,
        par15: body.par15,
        par16: body.par16,
        par17: body.par17,
        par18: body.par18,
    })
    course.save(function(err,course){
        if(err) return console.error(err)
    })
    return res.json(course)
}