import React, { useState, useMemo } from 'react';
import termsData from '../data/termsData';
import '../styles/App.css';
import Filters from './Filters';

const terms = termsData;
const categories = Array.from(new Set(terms.flatMap((term) => term.categories))).sort();

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
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
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const visibleTerms = useMemo(() => {
    return filteredTerms.slice(startIndex, endIndex);
  }, [filteredTerms, startIndex, endIndex]);

  const renderTerms = () => {
    if (visibleTerms.length === 0) {
      return (
        <div className="no-results-container">
          <p>
            Que pena! Parece que não há nenhum resultado para o termo <span>"{searchTerm}"</span>.
          </p>
          <p>
            <a target="_blank" rel="noreferrer" href="https://forms.gle/xux29vYtsoakbdZg9">Clique aqui</a> para sugerir a inclusão desse termo no GlossárioTech.
          </p>
        </div>
      );
    }

    return visibleTerms.map((term, index) => (
      <div className="term" key={index}>
        <h3>{term.name}</h3>
        <p>{term.description}</p>
      </div>
    ));
  };

  return (
    <>
      <div className="container" data-testid="glossary">
        <Filters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          categories={categories}
          handleSearchChange={handleSearchChange}
          handleCategoryChange={handleCategoryChange}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

        <div className="cards">
          {renderTerms()}
        </div>
      </div>
    </>
  );
}

export default Glossary;
