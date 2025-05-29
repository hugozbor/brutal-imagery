
import React from 'react';

/**
 * PortfolioWindow Component - Displays portfolio categories and recent works
 * Shows different art categories with work counts and a grid of recent pieces
 */
const PortfolioWindow = () => {
  
  /**
   * Portfolio categories configuration
   * Edit these to match your actual portfolio sections
   */
  const categories = [
    { name: 'Paintings', icon: '🎨', count: 12 },
    { name: 'Digital Art', icon: '💻', count: 8 },
    { name: 'Photography', icon: '📸', count: 15 },
    { name: 'Sculptures', icon: '🗿', count: 6 },
  ];

  return (
    <div className="space-y-4">
      <h2 className="font-mono font-bold text-lg">Portfolio Categories</h2>
      
      {/* Portfolio Categories Grid */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="border-2 border-gray-600 p-4 bg-white hover:bg-gray-100 cursor-pointer"
            // Add onClick handler here to navigate to specific category
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-mono font-bold text-sm">{category.name}</h3>
              <p className="font-mono text-xs text-gray-600">{category.count} works</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Works Preview Section */}
      <div className="border-2 border-gray-600 p-3 bg-white">
        <h3 className="font-mono font-bold mb-2">Recent Works</h3>
        
        {/* Grid of placeholder images */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-400 border border-gray-600 flex items-center justify-center"
              // Replace with actual images: <img src={`path/to/artwork-${i}.jpg`} alt={`Artwork ${i}`} />
            >
              <span className="text-xs font-mono text-gray-600">IMG_{i.toString().padStart(2, '0')}</span>
            </div>
          ))}
        </div>
        
        {/* To display actual images, replace the placeholder divs above with:
            <img 
              src="path/to/your/image.jpg" 
              alt="Artwork description"
              className="aspect-square object-cover border border-gray-600" 
            />
        */}
      </div>
    </div>
  );
};

export default PortfolioWindow;
