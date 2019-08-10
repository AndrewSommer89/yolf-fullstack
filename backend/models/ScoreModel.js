const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let scoreSchema = new Schema({
    date: String,
    handicapScore: Number,
    course: String,
    teebox: String,
    totalScore: Number,
    totalPutts: Number,
    scoreToPar: Number,
    eagles:  Number,
    birdies:  Number,
    pars: Number,
    bogeys: Number,
    doubleBogeys: Number,
    tripleBogeys: Number
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;