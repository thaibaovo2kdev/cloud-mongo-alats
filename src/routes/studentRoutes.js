const express = require('express');
const { createStudent, getAllStudents } = require('../controllers/studentController');

const router = express.Router();

router.post('/create', createStudent);
router.get('/all', getAllStudents);

module.exports = router;
