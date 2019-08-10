const express = require('express');
const router = express.Router();
const {list, show, create, update} = require("../controllers/ScoreController")

router.get('/scores',list);
router.get("/scores/:id",show);
router.post("/scores",create)
router.post("/scores/update/:id",update)

module.exports = router;