const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express')
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

let API_PORT = 3001;
const app = express();
app.use(cors());

//connect to mongodb
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
    .then(() => console.log('Database for the yolf app connected successfully!'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static(path.join(__dirname,)));
    
    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + "../client/build.index.html"));
    });
    } else{
    app.use(express.static('../client/public'))
}
const scoreRoutes = require("./routes/ScoreRoutes");
const courseRoutes = require("./routes/CourseRoutes");

app.use(scoreRoutes);
app.use(courseRoutes);

console.log('PROCESS PORT: ', process.env.PORT);
console.log('API_PORT: ', API_PORT);

// launch our backend into a port
app.listen(process.env.PORT || API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));