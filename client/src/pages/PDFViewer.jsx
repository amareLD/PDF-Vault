
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import api from '../api';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const { id } = useParams();
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await api.get(`/pdfs/${id}`, {
          responseType: 'blob',
        });
        setPdfData(URL.createObjectURL(response.data));
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPDF();
  }, [id]);

  return (
    <div>
      <h1>PDF Viewer</h1>
      {pdfData && (
        <Document file={pdfData}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
};

export default PDFViewer;
