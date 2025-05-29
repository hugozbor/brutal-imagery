const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static('.'));

// Endpoint to list gallery images
app.get('/list-gallery', async (req, res) => {
    try {
        const files = await fs.readdir(path.join(__dirname, 'images', 'gallery'));
        // Filter only image files
        const imageFiles = files.filter(file => 
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );
        res.json(imageFiles);
    } catch (error) {
        console.error('Error reading gallery directory:', error);
        res.status(500).json({ error: 'Failed to read gallery directory' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 