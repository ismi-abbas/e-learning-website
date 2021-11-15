const upload = require('../../middleware/upload');
const express = require('express');
const router = express.Router();
const Grid = require('gridfs-stream');
// @route    POST api/upload/file
// @desc     Get current users profile
// @access   Private
router.post('/file', upload.single('file'), async (req, res) => {
  if (req.file === undefined) {
    return res.send('You must select a file.');
  }
  const imgUrl = `http://localhost:5001/api/upload/file/${req.file.filename}`;
  return res.send(imgUrl);
});
// @route    GET api/upload/file
// @desc     Get video stream
// @access   Public
router.get('file/:filename', async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });

    const readStream = gfs.createReadStream([id, file.filename]);
    readStream.pipe(res);
  } catch (error) {
    res.send('not found');
  }
});
// @route    GET api/upload/files
// @desc     Get all video files
// @access   Public
router.get('/', async (req, res) => {
  try {
    const file = await gfs.files.find();

    const readStream = gfs.createReadStream();
    // res.json(file);
    readStream.pipe(res);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/upload/file
// @desc     Get video stream
// @access   Public
router.delete('/file/:filename', async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.send('success');
  } catch (error) {
    console.log(error);
    res.send('An error occured.');
  }
});

// router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
