import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

// Import Routes
import filmsRoutes from './routes/films.js';
import eventsRoutes from './routes/events.js';
import homeRoutes from './routes/home.js';
import galleryRoutes from './routes/gallery.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Determine public directory path (parent of server folder)
const PUBLIC_DIR = path.join(__dirname, '../public');
const UPLOADS_DIR = path.join(PUBLIC_DIR, 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
        // Create unique filename: timestamp + original extension
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, 'file-' + uniqueSuffix + ext);
    }
});

const upload = multer({ storage: storage });

// Routes
app.use('/api/films', filmsRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/gallery', galleryRoutes);

// File Upload Endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    // Return path relative to public folder so frontend can access it
    const relativePath = '/uploads/' + req.file.filename;
    res.json({ url: relativePath });
});

// Admin Login Endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Credentials stored on server-side (not visible to frontend inspection)
    const VALID_USER = "vitsion_2025";
    const VALID_PASS = "pepperspray";

    if (username === VALID_USER && password === VALID_PASS) {
        return res.json({ success: true, message: "Authenticated" });
    } else {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

// -- Existing Contact Route Logic --
const CONTACTS_DATA_FILE = path.join(__dirname, 'contacts.json');

// Ensure data file exists
if (!fs.existsSync(CONTACTS_DATA_FILE)) {
    fs.writeFileSync(CONTACTS_DATA_FILE, JSON.stringify([], null, 2));
}

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toISOString()
    };

    // Read existing data
    fs.readFile(CONTACTS_DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        let contacts = [];
        try {
            contacts = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            contacts = [];
        }

        // Add new contact
        contacts.push(newContact);

        // Write back to file
        fs.writeFile(CONTACTS_DATA_FILE, JSON.stringify(contacts, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ error: 'Failed to save data' });
            }

            console.log('New contact saved:', newContact);
            res.status(201).json({ message: 'Contact saved successfully', contact: newContact });
        });
    });
});

app.get('/api/contact', (req, res) => {
    fs.readFile(CONTACTS_DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

app.delete('/api/contact/:id', (req, res) => {
    const { id } = req.params;
    fs.readFile(CONTACTS_DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        let contacts = JSON.parse(data);
        const filteredContacts = contacts.filter(c => c.id.toString() !== id);

        fs.writeFile(CONTACTS_DATA_FILE, JSON.stringify(filteredContacts, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to delete data' });
            }
            res.json({ message: 'Deleted successfully' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
