const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/upload-image', upload.single('image'), (req, res) => {
  const imageType = req.file.mimetype;
  const imageUrl = req.file.path;

  // Save the image type and URL in your JSON file or database
  // Here, we're just sending the image metadata as a response
  res.json({ imageType, imageUrl });
});

module.exports = router;
