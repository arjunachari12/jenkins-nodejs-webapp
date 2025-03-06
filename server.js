const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JS)
app.use(express.static('public'));

// Define a simple homepage
app.get('/', (req, res) => {
    res.render('index', { message: "Hello, Jenkins! This is a Node.js web app." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
