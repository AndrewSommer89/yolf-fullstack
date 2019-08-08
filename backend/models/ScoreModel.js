const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let scoreSchema = new Schema({
    date: {
        type: String
    },
    course: {
        type: String
    },
    totalScore: {
        type: Number
    },
    totalPutts: {
        type: Number
    },
    scoreToPar: {
        type: Number
    },
    eagles: {
        type: Number
    },
    birdies: {
        type: Number
    },
    pars: {
        type: Number
    },
    bogeys: {
        type: Number
    },
    doubleBogeys: {
        type: Number
    },
    tripleBogeys: {
        type: Number
    }
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;