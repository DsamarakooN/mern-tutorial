const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');

// connect to database
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// error middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is up running on port ${port}`);
});
