import express from 'express';
import multer from 'multer';
import PDF from '../models/PDF.js';
import { protect } from '../middleware/authMiddleware.js';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDFs are allowed'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});

// Upload file route
router.post('/upload', protect, upload.single('pdf'), async (req, res) => {
  try {
    const newPDF = new PDF({
      title: req.file.originalname,
      path: req.file.path,
      uploader: req.user.id,
    });
    const savedPDF = await newPDF.save();
    res.status(200).json(savedPDF);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Retrieve files route
router.get('/', protect, async (req, res) => {
  try {
    const pdfs = await PDF.find({ uploader: req.user.id });
    res.status(200).json(pdfs);
  } catch (err) {
    res.status(500).json(err.message);
  }
});







router.get('/:id', protect, async (req, res) => {
  try {
    const pdf = await PDF.findById(req.params.id);
    if (!pdf) return res.status(404).json('PDF not found');

    // Serve the file
    const filePath = path.resolve(pdf.path);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).json('File not found');
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});









export default router;
