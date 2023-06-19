import React, { useState, useEffect, useMemo } from 'react';
import termsData from '../data/termsData';
import Header from './Header';
import Footer from './Footer';
import '../App.css';
import Filters from './Filters';

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
    setCurrentPage(1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredTerms = useMemo(() => {
    return terms
      .filter((term) => {
        const searchTermMatch = term.name.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatch = selectedCategory === '' || term.categories.includes(selectedCategory);
        return searchTermMatch && categoryMatch;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedCategory]);

  const totalItems = filteredTerms.length;
  const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setTotalPages(calculatedTotalPages);
    setCurrentPage((prevPage) => {
      if (prevPage > calculatedTotalPages) {
        return calculatedTotalPages;
      }
      return prevPage;
    });
  }, [calculatedTotalPages]);

  const visibleTerms = useMemo(() => {
    return filteredTerms.slice(startIndex, endIndex);
  }, [filteredTerms, startIndex, endIndex]);

  return (
    <>
      <Header />

      <div className="container">
        <Filters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          categories={categories}
          handleSearchChange={handleSearchChange}
          handleCategoryChange={handleCategoryChange}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />

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