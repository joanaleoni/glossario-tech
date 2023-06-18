import React, { useState, useEffect } from 'react';
import termsData from '../data/termsData';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

import { BsSearch } from 'react-icons/bs';

const terms = termsData;
const categories = Array.from(new Set(terms.flatMap((term) => term.categories))).sort();

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredTerms = terms
    .filter((term) => {
      const searchTermMatch = term.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = selectedCategory === '' || term.categories.includes(selectedCategory);
      return searchTermMatch && categoryMatch;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const visibleTerms = filteredTerms.slice(startIndex, endIndex);

  useEffect(() => {
    const totalItems = filteredTerms.length;
    setTotalPages(Math.ceil(totalItems / itemsPerPage));

    setCurrentPage((prevPage) => {
      if (prevPage > totalPages) {
        return totalPages; // Adjust current page if it exceeds the total pages
      }
      return prevPage;
    });
  }, [filteredTerms, totalPages]);

  return (
    <>
      <Header />

      <div className="container">
        <div className="filter-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Procure um termo"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <BsSearch className="search-icon" />
          </div>
          <div className="category-container">
            <select
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="category-select"
            >
              <option value="">Todas as categorias</option>
              {categories.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              &lt;
            </button>
            <span>
              {currentPage}/{totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              &gt;
            </button>
          </div>
        </div>

        <div className="cards">
          {visibleTerms.map((term, index) => (
            <div className="term" key={index}>
              <h3>{term.name}</h3>
              <p>{term.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Glossary;
