import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const GALLERY_FILE = path.join(__dirname, '../../src/data/gallery.json');

// GET gallery data
router.get('/', (req, res) => {
    fs.readFile(GALLERY_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read gallery data' });
        }
        res.json(JSON.parse(data));
    });
});

// POST (update) gallery data
router.post('/', (req, res) => {
    const galleryData = req.body;
    fs.writeFile(GALLERY_FILE, JSON.stringify(galleryData, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save gallery data' });
        }
        res.json({ message: 'Gallery updated successfully' });
    });
});

export default router;
