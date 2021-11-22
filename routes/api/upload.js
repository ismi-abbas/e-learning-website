const express = require('express');
const router = express.Router();
const Upload = require('../../models/Upload');
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const config = require('config');
const db = config.get('mongoURI');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// Create mongo connection
const conn = mongoose.createConnection(db);

// Init gfs
let gfs;

conn.once('open', () => {
 // Init stream
 gfs = Grid(conn.db, mongoose.mongo);
 gfs.collection('uploads');
});

// Upload Middleware
router.use(bodyParser.json());
router.use(methodOverride('_method'));

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

// @route    GET api/upload
// @desc     Get uploads
// @access   Private
router.get('/', async (req, res) => res.send('Connected to API'));

// @route    POST api/upload
// @desc     Get uploads
// @access   Private
router.post('/', upload.single('file'), (req, res) => {
 res.json({ file: req.file });
});

module.exports = router;
