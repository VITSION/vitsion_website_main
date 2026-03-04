import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../../src/data/events.json');

const readData = () => {
    if (!fs.existsSync(DATA_FILE)) {
        return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
};

router.get('/', (req, res) => {
    try {
        const data = readData();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to read events data' });
    }
});

router.post('/', (req, res) => {
    try {
        const newData = req.body; // Expecting array of events
        fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2));
        res.json({ message: 'Events data updated successfully', data: newData });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save events data' });
    }
});

export default router;
