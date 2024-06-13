import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to PDF Vault, your trusted platform for managing and viewing PDFs online. We are committed to providing a seamless and secure experience for our users, enabling them to upload, view, and share PDF documents with ease.
        </p>
        <p className="text-gray-600 mb-4">
          Our team is passionate about making document management accessible and efficient for everyone. Whether you're a student, professional, or simply need to handle PDFs regularly, PDF Vault is here to help.
        </p>
        <p className="text-gray-600 mb-4">
          Thank you for choosing PDF Vault. If you have any questions or feedback, please feel free to reach out to us.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between mt-6">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-2 text-center">
              To simplify PDF management and provide a user-friendly platform for everyone.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mt-2 text-center">
              Email: support@pdfvault.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
