// 1. Instancias
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var favicon = require('serve-favicon');
var bicicletasAPIRouter = require('./routes/Api/bicicletas');
var app = express();
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

// 2. Configuraciones
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 3. Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// 4. Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/bicicletas', bicicletasAPIRouter); //If there are several versions of the API, /api/v1/bicicletas is usually used

// Opciones Swagger
const options = {
  definition: {
    openapi: "3.1.0", // Utilizaremos OpenAPI en su versión 3.1.0
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options); // Analiza las opciones pasadas como parámetro y devuelve el objeto de especificación de Swagger convertido
app.use(
  "/api-docs",
  // Proceso de configuración de Swagger UI
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// 5. Manejadores de errores
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// 6. Exportación del servidor
module.exports = app;