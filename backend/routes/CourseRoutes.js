const express = require('express');
const router = express.Router();
const {list,show,create,find} = require('../controllers/CourseController')

router.get('/api/courses',list);
router.get('/api/courses/:id',show);
router.get("/api/courses/name/:course",find);
router.post('/api/courses',create);

module.exports = router