const connectDB = require('./config/db');
const express = require('express');

// Init Express
const app = express();

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
app.use('/api/course', require('./routes/api/course'));
app.use('/api/upload', require('./routes/api/upload')); // Upload route

// Store PORT in a variable
const PORT = process.env.PORT || 5000; //process.env for deployment env
// Port to listen
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
