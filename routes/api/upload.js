const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// Upload Middleware
router.use(bodyParser.json());
router.use(methodOverride('_method'));

// Create mongo connection
const conn = mongoose.createConnection(db);

conn.once('open', () => {
 // Init stream
 gfs = Grid(conn.db, mongoose.mongo);
 gfs.collection('uploads');
 console.log('Connected to MongoDB upload');
});

// @route    GET api/upload
// @desc     Get uploads
// @access   Private
router.get('/', (req, res) => {
 res.send('Connected to API');
});

// Init gfs
let gfs;

// Create storage engine
const storage = new GridFsStorage({
 url: db,
 file: (req, file) => {
  return new Promise((resolve, reject) => {
   crypto.randomBytes(16, (err, buf) => {
    if (err) {
     return reject(err);
    }
    const filename = buf.toString('hex') + path.extname(file.originalname);
    const fileInfo = {
     filename: filename,
     bucketName: 'uploads',
    };
    resolve(fileInfo);
   });
  });
 },
});

const upload = multer({ storage });

// @route    POST api/upload
// @desc     Get uploads
// @access   Private
router.post('/', upload.single('file'), (req, res) => {
 res.json({ file: req.file });
});

// @route    GET /files
// @desc     Display all files in JSON
// @access   Private
router.get('/files', (req, res) => {
 gfs.files.find().toArray((err, files) => {
  // Check if files exist
  if (!files || files.length === 0) {
   res.status(404).json({
    err: 'No files exists',
   });
  }

  //   File exist
  return res.json(files);
 });
});

// @route    GET /files/:filename
// @desc     Display single file object
// @access   Public
router.get('/files/:filename', (req, res) => {
 gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
  // Check if files exist
  if (!file || file.length === 0) {
   res.status(404).json({
    err: 'No files exists',
   });
  }
  //   File exist
  return res.json(file);
 });
});

// @route    GET /image/:filename
// @desc     Display image
// @access   Public
router.get('/image/:filename', (req, res) => {
 gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
  // Check if file
  if (!file || file.length === 0) {
   return res.status(404).json({
    err: 'No file exists',
   });
  }

  // Check if image
  if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
   // Read output to browser
   const readstream = gfs.createReadStream(file.filename);
   readstream.pipe(res);
  } else {
   res.status(404).json({
    err: 'Not an image',
   });
  }
 });
});

// @route DELETE /files/:id
// @desc  Delete file
router.delete('/files/:id', (req, res) => {
 gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
  if (err) {
   return res.status(404).json({ err: err });
  }
  res.redirect('/');
 });
});
module.exports = router;
