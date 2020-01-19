const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//Setup server on port 5000
const app = express();
const port = process.env.PORT || 5000;

//Parse JSON
app.use(cors());
app.use(express.json());

//Connect to MongoDB database
const uri = process.env.Atlas_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB database connection established successfully`)
})

//Exercises and Users routers
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('users', usersRouter);

//Listen on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});