import React from 'react';

const SearchFilters = () => {
  return (
    <div className="mt-2 btn-group">
      <button className="btn btn-light" type='button'>
        All employees
      </button>
      <button className="btn btn-outline-light" type='button'>
        For promotion
      </button>
      <button className="btn btn-outline-light" type='button'>
        Salary over 1000$
      </button>
    </div>
  );
}

export default SearchFilters;
