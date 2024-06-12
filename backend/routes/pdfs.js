// import express from 'express';
// import multer from 'multer';
// import PDF from '../models/PDF.js';
// import jwt from 'jsonwebtoken';
// import path from 'path';
// import fs from 'fs';

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === 'application/pdf') {
//       cb(null, true);
//     } else {
//       cb(new Error('Only PDFs are allowed'), false);
//     }
//   },
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

// router.post(
//   '/upload',
//   authenticateToken,
//   upload.single('pdf'),
//   async (req, res) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ message: 'No file uploaded' });
//       }

//       const newPDF = new PDF({
//         title: req.file.originalname,
//         path: req.file.path,
//         uploader: req.user.id,
//       });

//       const savedPDF = await newPDF.save();
//       res.status(200).json(savedPDF);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   }
// );

// router.get('/', authenticateToken, async (req, res) => {
//   try {
//     const pdfs = await PDF.find({ uploader: req.user.id });
//     res.status(200).json(pdfs);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', authenticateToken, async (req, res) => {
//   try {
//     const pdf = await PDF.findById(req.params.id);
//     if (!pdf) return res.status(404).json('PDF not found');

//     res.sendFile(path.resolve(pdf.path));
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// export default router;



import express from 'express';
import multer from 'multer';
import PDF from '../models/PDF.js';
import jwt from 'jsonwebtoken';
import path from 'path';

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

// Middleware to authenticate JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Upload file route
router.post('/upload', authenticateToken, upload.single('pdf'), async (req, res) => {
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
router.get('/', authenticateToken, async (req, res) => {
    try {
        const pdfs = await PDF.find({ uploader: req.user.id });
        res.status(200).json(pdfs);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

export default router;
