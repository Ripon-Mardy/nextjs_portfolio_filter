// pages/index.js
'use client'
import { useState , useEffect} from 'react';
import PortfolioFilter from '@/components/porfoliofilter';

const HomePage = () => {
  useEffect(() => {
    // Set filteredContent to all content when the component mounts
    setFilteredContent(allContent);
  }, []);
  const [filteredContent, setFilteredContent] = useState([]);

  const handleFilter = (category) => {
    if (category === 'All') {
      // Show all content
      setFilteredContent(allContent);
    } else {
      // Filter content by category
      const filteredItems = allContent.filter(item => item.category === category);
      setFilteredContent(filteredItems);
    }
  };

  // Dummy data for demonstration
  const allContent = [
    { id: 1, title: 'Project 1', category: 'Web Design' },
    { id: 2, title: 'Project 2', category: 'Development' },
    { id: 3, title: 'Project 3', category: 'Web Design' },
    { id: 4, title: 'Project 4', category: 'Development' },
    // Add more content as needed
  ];

  return (
    <div>
      <PortfolioFilter handleFilter={handleFilter} />
      {/* Render filtered content */}
      <div className="grid grid-cols-3 gap-4">
        {filteredContent.map(item => (
          <div key={item.id} className="bg-gray-200 p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
