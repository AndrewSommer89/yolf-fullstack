const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express')
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');


const API_PORT = 3001;
const app = express();
app.use(cors());

//connect to mongodb
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
    .then(() => console.log('Database for the yolf app connected successfully!'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

const scoreRoutes = require("./routes/ScoreRoutes");
const courseRoutes = require("./routes/CourseRoutes");

app.use(scoreRoutes);
app.use(courseRoutes);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));