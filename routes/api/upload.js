const upload = require('../../middleware/upload');
const express = require('express');
const router = express.Router();

router.post('/upload', upload.single('file'), async (req, res) => {
  if (req.file === undefined) return res.send('You must select a file.');
  const imgUrl = `http://localhost:5001/api/upload/${req.file.filename}`;
  return res.send(imgUrl);
});

router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
