import React from 'react';

const Pagination = ({ totalPages, currentPage, paginate }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="mt-8">
      <ul className="flex justify-center space-x-2">
        <li>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className={`px-4 py-2 rounded-lg shadow-md transition duration-300 ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Previous</button>
        </li>
        {pageNumbers.map(num => (
          <li key={num}>
            <button onClick={() => paginate(num)} className={`px-4 py-2 rounded-lg shadow-md transition duration-300 ${currentPage === num ? 'bg-blue-700 text-white font-bold' : 'bg-blue-200 hover:bg-blue-300 text-blue-800'}`}>{num}</button>
          </li>
        ))}
        <li>
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className={`px-4 py-2 rounded-lg shadow-md transition duration-300 ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;