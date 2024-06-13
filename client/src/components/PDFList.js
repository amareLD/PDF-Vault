import React from 'react';

const PDFList = ({ pdfs }) => {
  return (
    <div className="bg-red-00 px-40">
      <h1 className="text-4xl font-semibold pt-5 pb-2">Uploaded PDFs</h1>
      <div className="max-h-80 overflow-y-auto">
        <ul>
          {pdfs.map((pdf) => (
            <li
              className="border-b-4 border-gray-400 py-2 my-1 rounded-2xl block w-full cursor-pointer p-4 transition duration-500 hover:bg-neutral-400 hover:text-white focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
              key={pdf._id}
            >
              <a
                href={`http://localhost:8000/api/pdfs/${pdf._id}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                 <img
                  src="/pdf.svg" 
                  alt="PDF Vault"
                  className="cursor-pointer w-5 h-5"
                />
                <span className="ml-5">{pdf.title}</span>
               
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PDFList;
