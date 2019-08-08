const express = require('express');
const router = express.Router();
const {list,show,create} = require('../controllers/CourseController')

router.get('/courses',list);
router.get('/courses/:id',show);
router.post('/courses',create);

module.exports = router