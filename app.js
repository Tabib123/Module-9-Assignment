const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jsonwebtoken = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');
const nodemon = require('nodemon');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressRateLimit({
  windowMs: 1000, 
  max: 10 
}));
app.use(cors());
app.use(expressMongoSanitize());
app.use(helmet());
app.use(hpp());

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});


const userController = require('./src/controllers/userController');
const adminController = require('./src/controllers/adminController');
const subAdminController = require('./src/controllers/subAdminController');
const postController = require('./src/controllers/postController');

const apiRoutes = require('./src/routes/api');

apiRoutes(app);

app.listen(process.env.RUNNING_PORT);
