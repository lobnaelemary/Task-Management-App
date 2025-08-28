import React from 'react';

const FilterBar = ({ currentFilter, setFilter }) => {
  const filters = [
    { key: 'all', label: 'All Task ' },
    { key: 'Personal', label: 'Personal' },
    { key: 'Work', label: 'Work' },
    { key: 'Urgent', label: 'Urgent' }
  ];

  return (
    <div className="filter-bar">
      {filters.map((filterItem) => (
        <button
          key={filterItem.key}
          className={`filter-btn ${currentFilter === filterItem.key ? 'active' : ''}`}
          onClick={() => setFilter(filterItem.key)}
        >
          {filterItem.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;