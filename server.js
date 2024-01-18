const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Set the destination folder for uploaded files

app.post('/products', upload.single('image'), (req, res) => {
  // Handle the file upload and product data
  const { name, price, category, color, description } = req.body;
  const image = req.file;

  // Here, you can implement your logic to process the image and store it, such as renaming the file or saving it to a specific directory.

  // Example response
  res.json({
    message: 'Product added successfully!',
    product: {
      name,
      price,
      category,
      color,
      description,
      image: {
        originalname: image.originalname,
        filename: image.filename,
        path: image.path,
      },
    },
  });
});

app.listen(4100, () => {
  console.log('Server is running on port 3000');
});
