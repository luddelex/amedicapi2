var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var mysql = require('mysql');
var con = require('./connect');
var cors = require('cors')

var loginRouter = require('./routes/login')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var patientRouter = require('./routes/patient')
var caregiverRouter = require('./routes/caregiver')
var diagnosisRouter = require('./routes/diagnosis')
var treatmentRouter = require('./routes/treatment')
var treatmentdiagnosisRouter = require('./routes/treatmentdiagnosis')
var symptomsRouter = require('./routes/symptoms')
//var caregiver_patient = requre('./routes/caregiver_patient')
//var district = require ('./routes/district')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
/*
let handlers = new HandlerGenerator();
app.post('/login', handlers.login);
app.get('/', middleware.checkToken, handlers.index);
*/

//app.use('/', indexRouter)
app.use('/', loginRouter)
app.use('/users', usersRouter)
app.use('/patient', patientRouter)
app.use('/caregiver', caregiverRouter)
app.use('/diagnosis', diagnosisRouter)
app.use('/treatment', treatmentRouter)
app.use('/treatmentdiagnosis', treatmentdiagnosisRouter)
app.use('/symptoms', symptomsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
