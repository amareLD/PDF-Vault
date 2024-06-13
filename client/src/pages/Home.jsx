import React, { useState, useEffect } from 'react';
import api from '../api';
import PDFList from '../components/PDFList';

const Home = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState(null);
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    // Retrieve user data from local storage
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
      fetchPDFs(token); // Fetch PDFs when the component mounts
    } else {
      setUser(null); // Ensure user is logged out if no token is found
    }
  }, []);

  const fetchPDFs = async (token) => {
    try {
      const response = await api.get('/pdfs/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPdfs(response.data);
    } catch (error) {
      console.error('Error fetching PDFs:', error);
      // Handle token expiration or other errors that require logging out the user
      setUser(null);
      localStorage.removeItem('token');
    }
  };

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
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('File uploaded successfully');
      setFile(null);
      fetchPDFs(user.token); // Refetch PDFs after uploading
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="border-4 bg-slate-00 rounded-lg py-5 px-5">
      <h1 className="mx-4 md:mx-40 p-5 text-center font-extrabold text-5xl text-black rounded-3xl">
        Upload & View PDF Online
      </h1>
      {user ? (
        <form
          className="bg-white mx-4 md:mx-40 mt-10 rounded-3xl "
          onSubmit={handleUpload}
        >
          <input
            className="w-full md:mb-5 md:w-8/12 md:mx-2 sm-w-4/12 px-4 py-4 md:py-20 border-4 border-black font-bold text-black text-xl md:text-2xl bg-white rounded-3xl"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          <button
            type="submit"
            className="md:w-3.5/12 md:mx-8  mt-4 md:mt-0 bg-black text-white font-bold text-xl md:text-2xl px-8 md:px-20 py-4 md:py-20 rounded-3xl hover:bg-white hover:text-black border-4 border-black"
          >
            Upload PDF
          </button>
        </form>
      ) : (
        <p className="text-center mt-10 text-red-500 font-bold">
          Please log in to read and upload PDF files
        </p>
      )}
      <PDFList pdfs={pdfs} />
    </div>
  );
};

export default Home;
