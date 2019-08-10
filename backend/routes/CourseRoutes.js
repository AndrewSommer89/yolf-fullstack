const express = require('express');
const router = express.Router();
const {list,show,create,find} = require('../controllers/CourseController')

router.get('/courses',list);
router.get('/courses/:id',show);
router.get("/courses/name/:course",find);
router.post('/courses',create);

module.exports = router