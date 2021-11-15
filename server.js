// require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

// Init Express
const app = express();

// Init GFS
let gfs;

// Run connect database function
connectDB();
// Init middleware
app.use(express.json({ extended: false }));

// GET request if API is running
app.get('/', (req, res) => res.send('API is running successfully'));

// Init GFS
let gfs;

// Stream Grid-Fs with mongoose
const conn = mongoose.createConnection();
conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('photos');
});

//Define the routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/course', require('./routes/api/course'));
app.use('/api/upload', require('./routes/api/upload')); // Upload route

// Store PORT in a variable
const PORT = process.env.PORT || 5001; //process.env for deployment env
// Port to listen
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
