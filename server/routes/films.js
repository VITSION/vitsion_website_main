import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correct path to data file (server/routes -> src/data)
const DATA_FILE = path.join(__dirname, '../../src/data/films.json');

// Helper to read data
const readData = () => {
    if (!fs.existsSync(DATA_FILE)) {
        return { row1: [], row2: [] };
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
};

// GET all films
router.get('/', (req, res) => {
    try {
        const data = readData();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to read films data' });
    }
});

// POST update films (entire object or specific row)
router.post('/', (req, res) => {
    try {
        const newData = req.body;
        // Basic validation could go here

        fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2));
        res.json({ message: 'Films data updated successfully', data: newData });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save films data' });
    }
});

export default router;
