var express = require('express');

var app = express();




var router = express.Router();

var db = require('../db_server/dataBase');

router.get('/api/students',db.getAllStudents);
router.get('/api/student',db.getSingleStudent);
router.post('/api/inserStudent/',db.createStudent);
router.put('/api/updateStudent/:id',db.updateStudent);
router.delete('/api/delstudent',db.deleteStudent);

module.exports = router;
