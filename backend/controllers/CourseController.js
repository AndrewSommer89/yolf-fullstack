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

exports.create = function(req,res){
    let body = req.body;
    let course = new Course({
        id: body.id,
        name: body.name,
        scorecard: body.scorecard,
        coursePar: body.coursePar,
        holes: [
            {
                hole: 1,
                par: body.par1
            },
            {
                hole: 2,
                par: body.par2
            },
            {
                hole: 3,
                par: body.par3
            },{
                hole: 4,
                par: body.par4
            },
            {
                hole: 5,
                par: body.par5
            },
            {
                hole: 6,
                par: body.par6
            },{
                hole: 7,
                par: body.par7
            },
            {
                hole: 8,
                par: body.par8
            },
            {
                hole: 9,
                par: body.par9
            },
            {
                hole: 10,
                par: body.par10
            },
            {
                hole: 11,
                par: body.par11
            },
            {
                hole: 12,
                par: body.par12
            },{
                hole: 13,
                par: body.par13
            },
            {
                hole: 14,
                par: body.par14
            },
            {
                hole: 15,
                par: body.par15
            },{
                hole: 16,
                par: body.par16
            },
            {
                hole: 17,
                par: body.par17
            },
            {
                hole: 17,
                par: body.par18
            }
        ]
    })
    course.save(function(err,course){
        if(err) return console.error(err)
    })
    return res.json(course)
}