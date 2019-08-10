const express = require('express');
const router = express.Router();
const {list, show, create, update} = require("../controllers/ScoreController")

router.get('/api/scores',list);
router.get("/api/scores/:id",show);
router.post("/api/scores",create)
router.post("/api/scores/update/:id",update)

module.exports = router;