let Score = require("../models/ScoreModel");
var ObjectId = require('mongodb').ObjectID;

//display all scores
exports.list = function(req,res){
    Score.find(function(err,scores){
        if(err) return console.error(err);
        return res.json(scores)
    })
}

//Display one course
exports.show = function(req,res){
    let id = ObjectId(req.params.id);
    Score.findById(id,function(err,score){
        if(err) return console.error(err)
        return res.json(score)
    });
}


//create new score
exports.create = function(req,res){
    let body = req.body;
    let score = new Score({
        date: body.date,
        course: body.course,
        teebox: body.teebox,
        totalScore: body.totalScore,
        handicapScore: body.handicapScore,
        totalPutts: body.totalPutts,
        scoreToPar: body.scoreToPar,
        eagles: body.eagles,
        birdies: body.birdies,
        pars: body.pars,
        bogeys: body.bogeys,
        doubleBogeys: body.doubleBogeys,
        tripleBogeys: body.tripleBogeys
    })
    score.save(function(err,score){
        if(err) return console.error(err)
    })
    return res.json(score)
}

exports.update = function(req,res){
    let body = req.body;
    Score.findById(req.params.id, function(err,score){
        if(!score)
            res.status(404).send("data is not found");
        else
            score.date = body.date;
            score.course = body.course;
            score.handicapScore = body.handicapScore;
            score.totalScore = body.totalScore;
            score.totalPutts = body.totalPutts;
            score.scoreToPar = body.scoreToPar;
            score.eagles = body.eagles;
            score.birdies = body.birdies;
            score.pars = body.pars;
            score.bogeys = body.bogeys;
            score.doubleBogeys = body.doubleBogeys;
            score.tripleBogeys = body.tripleBogeys;
            
            score.save().then(score => {
                res.json('Score updated!')
            })
            .catch(err => {
                res.status(400).send('Update not possible');
            });
    });
}