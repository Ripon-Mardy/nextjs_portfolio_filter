// components/PortfolioFilter.js
import { useState } from 'react';

const PortfolioFilter = ({ handleFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleClick = (category) => {
    setSelectedCategory(category);
    handleFilter(category);
    console.log(category);
  };

  return (
    <div className="flex justify-center mb-8">
      <button
        className={`mr-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded ${selectedCategory === 'All' ? 'bg-gray-300' : ''}`}
        onClick={() => handleClick('All')}
      >
        All
      </button>
      <button 
        className={`mr-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded ${selectedCategory === 'Web Design' ? 'bg-gray-300' : ''}`}
        onClick={() => handleClick('Web Design')}
      >
        Web Design
      </button>
      <button 
        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded ${selectedCategory === 'Development' ? 'bg-gray-300' : ''}`}
        onClick={() => handleClick('Development')}
      >
        Development
      </button>
    </div>
  );
};

export default PortfolioFilter;
