var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');
var indexRouter = require('./routes/index');
var gitPlant = require('./fun/gitPlant');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.use(gitPlant.start) // localhost:3999 에서 즉시 실행

// const task = cron.schedule("*/1 * * * *", () => {       // 1분마다 실행
const task = cron.schedule("0 9 1-31 * *", () => {   // 1~31일(매일) 9시 0분에 실행
  gitPlant.startSchedule()  
}, {
  timezone: 'Asia/Seoul'
});

task.start();




// catch 404 and forward to error handler
app.use(function (req, res, next) { next(createError(404)); });

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => { console.log(`******** ${app.get('port')} 번 포트에서 실행 ********`) });
module.exports = app;
