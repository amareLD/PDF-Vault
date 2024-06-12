
import React, { useState } from 'react';
import api from '../api';
import PDFList from '../components/PDFList';

const Home = ({ user }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pdf', file);

    try {
      await api.post('/pdfs/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      {user && (
        <form onSubmit={handleUpload}>
          <input type="file" accept="application/pdf" onChange={handleFileChange} />
          <button type="submit">Upload PDF</button>
        </form>
      )}
      <PDFList />
    </div>
  );
};

export default Home;
