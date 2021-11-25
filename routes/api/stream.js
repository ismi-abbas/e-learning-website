const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const router = express.Router();
const config = require('config');
const db = config.get('mongoURI');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const multer = require('multer');

// Create mongo connection
const conn = mongoose.createConnection(db);

conn.once('open', () => {
 // Init stream
 gfs = Grid(conn.db, mongoose.mongo);
 gfs.collection('videos');
 console.log('Connected to MongoDB video stream');
});

router.get('/', function (req, res) {
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
     bucketName: 'videos',
    };
    resolve(fileInfo);
   });
  });
 },
});

const videos = multer({ storage });

// Sorry about this monstrosity
router.get('/init-video', function (req, res) {
 mongodb.MongoClient.connect(url, function (error, client) {
  if (error) {
   res.json(error);
   return;
  }
  const db = client.db('videos');
  const bucket = new mongodb.GridFSBucket(db);
  const videoUploadStream = bucket.openUploadStream('bigbuck');
  const videoReadStream = fs.createReadStream('./bigbuck.mp4');
  videoReadStream.pipe(videoUploadStream);
  res.status(200).send('Done...');
 });
});

router.get('/mongo-video', function (req, res) {
 mongodb.MongoClient.connect(url, function (error, client) {
  if (error) {
   res.status(500).json(error);
   return;
  }

  const range = req.headers.range;
  if (!range) {
   res.status(400).send('Requires Range header');
  }

  const db = client.db('videos');
  // GridFS Collection
  db.collection('fs.files').findOne({}, (err, video) => {
   if (!video) {
    res.status(404).send('No video uploaded!');
    return;
   }

   // Create response headers
   const videoSize = video.length;
   const start = Number(range.replace(/\D/g, ''));
   const end = videoSize - 1;

   const contentLength = end - start + 1;
   const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
   };

   // HTTP Status 206 for Partial Content
   res.writeHead(206, headers);

   const bucket = new mongodb.GridFSBucket(db);
   const downloadStream = bucket.openDownloadStreamByName('bigbuck', {
    start,
   });

   // Finally pipe video to response
   downloadStream.pipe(res);
  });
 });
});

module.exports = router;
