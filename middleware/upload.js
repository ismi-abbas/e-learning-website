const config = require('config');
const multer = require('multer');
const db = config.get('mongoURI');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: db,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg'];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: 'photos',
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
