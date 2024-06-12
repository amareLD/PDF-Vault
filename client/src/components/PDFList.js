import React, { useEffect, useState } from 'react';
import api from '../api';

const PDFList = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const response = await api.get('/pdfs/');
        setPdfs(response.data);
      } catch (error) {
        console.error('Error fetching PDFs:', error);
      }
    };

    fetchPDFs();
  }, []);

  return (
    <div>
      <h2>Uploaded PDFs</h2>
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf._id}>
            <a href={`http://localhost:8000/api/pdfs/${pdf._id}`} target="_blank" rel="noopener noreferrer">
              {pdf.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;
