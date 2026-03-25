// Import Express
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (your frontend files like HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});