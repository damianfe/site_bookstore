const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override')

var app = express();

/* ****Enrutadores**** */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

/* ****view engine setup**** */
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

/* ****config de archivos estaticos**** */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname,'..','public')));
app.use(methodOverride('_method'));

/* ****middlewares de rutas**** */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


/* app.get("/products", (req,res) => res.sendFile(path.resolve(__dirname, "views", "products.html")));
app.get("/product-detail", (req,res) => res.sendFile(path.resolve(__dirname, "views", "productDetail.html")));
app.get("/product-cart", (req,res) => res.sendFile(path.resolve(__dirname, "views", "productCart.html")));
app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname, "views", "register.html")));
app.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, "views", "login.html")));  */

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