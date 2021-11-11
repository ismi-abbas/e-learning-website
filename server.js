require('dotenv').config();
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

//Define the routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/courses', require('./routes/api/courses'));
app.use('/api/upload', require('./routes/api/upload')); // Upload route

// Stream Grid-Fs
// mongoose.connectDB('open', function () {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('photos');
// });

// Media routes
app.get('/api/upload/:filename', async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.send('not found');
  }
});

app.delete('/api/upload/:filename', async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.send('success');
  } catch (error) {
    console.log(error);
    res.send('An error occured.');
  }
});

// Store PORT in a variable
const PORT = process.env.PORT || 5001; //process.env for deployment env
// Port to listen
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
