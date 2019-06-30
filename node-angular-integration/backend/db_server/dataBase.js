var promise = require('bluebird');

var options = {
    promiseLib : promise
};

var pgp = require('pg-promise')(options);

var connectionString = 'postgres://postgres:root@localhost:5432/appdb';
var cn = {
  host: 'localhost', 
  port: 5432,
  database: 'appdb',
  user: 'postgres',
  password: 'postgres'
};

var db = pgp(cn);

function getAllStudents(req,res,next){
  console.log('get student');
  
    db.query('SELECT * FROM students ORDER BY id ASC')
    .then(function (data) {
        res.status(200)
        .json({
            status:'success',
            data: data,
            message: 'retrived all students'
        });
       
        
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleStudent(req, res, next) {
    console.log('get single student');
    
    var studentID = parseInt(req.query.id);
    db.query('select * from students where id = $1', studentID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE Student'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createStudent(req, res, next) {
  
  db.query("insert into students (name,email,mobile) "+ 
  "values ('"+req.body.name+"','"+
      req.body.email+"','"+req.body.mobile+"')")
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one Student'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateStudent(req, res, next) {
  console.log('students updated');
  
  console.log(req.query);
  db.query('update students set name=$1, email=$2, mobile=$3 where id=$4',
    [req.query.name, req.query.email, req.query.mobile, parseInt(req.query.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated Student'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteStudent(req, res, next) {

  console.log('deleted successfully');
  
  var studentId = parseInt(req.query.id);
  db.result('delete from students where id = $1', studentId)
    .then(function (result) {
     
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} player`
        });
      
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
    getAllStudents: getAllStudents,
    getSingleStudent: getSingleStudent,
    createStudent: createStudent,
  updateStudent: updateStudent,
  deleteStudent: deleteStudent
};

