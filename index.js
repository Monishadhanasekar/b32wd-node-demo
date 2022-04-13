const express = require("express");
const employeeRouter = require('./router/employee');
const mongo = require('./shared/connect');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
// to convert req.body into json format
app.use(express.json());
mongo.connect();

app.use('/', (req,res,next) => {
    // Authentication
    console.log("hello middleware 1");
    next();
});

app.use('/employee', employeeRouter);

app.listen(process.env.PORT || 3000);