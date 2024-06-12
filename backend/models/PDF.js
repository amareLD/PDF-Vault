// import mongoose from 'mongoose';

// const PDFSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     path: { type: String, required: true },
//     uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// }, { timestamps: true });

// export default mongoose.model('PDF', PDFSchema);

import mongoose from 'mongoose';

const PDFSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: false,
  },
  uploader: {
    type: String,
    required: false,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const PDF = mongoose.model('PDF', PDFSchema);

export default PDF;
