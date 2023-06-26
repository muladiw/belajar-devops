const express = require('express')
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
// var cookieParser = require('cookie-parser')
var appRouter = require('./src/modules/index');
const fileUpload = require('express-fileupload');
var path = require('path');

// var logger = require('morgan');
const port = process.env.PORT;
app.use(cors({ credentials: true }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));