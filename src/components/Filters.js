import React from 'react';
import { BsSearch } from 'react-icons/bs';

function Filters({
  searchTerm,
  selectedCategory,
  categories,
  handleSearchChange,
  handleCategoryChange,
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="filter-container" data-testid="filters-component">
      <div className="search-container">
        <input
          type="text"
          placeholder="Em busca do termo perdido..."
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
  );
}

export default React.memo(Filters);