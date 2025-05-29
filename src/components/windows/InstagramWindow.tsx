
import React from 'react';

/**
 * InstagramWindow Component - Displays a mock Instagram profile
 * Shows profile info, follower count, and a grid of posts
 */
const InstagramWindow = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-mono font-bold text-lg">Instagram Feed</h2>
      
      {/* Instagram Profile Mock-up */}
      <div className="border-2 border-gray-600 p-3 bg-white">
        
        {/* Profile Header */}
        <div className="flex items-center space-x-3 mb-4">
          {/* Profile Picture */}
          <div className="w-12 h-12 bg-gray-400 border border-gray-600 rounded-full flex items-center justify-center">
            <span className="text-lg">📷</span>
          </div>
          
          {/* Profile Info */}
          <div>
            {/* Edit this username to your actual Instagram handle */}
            <div className="font-mono font-bold text-sm">@artist</div>
            {/* Edit this follower count to match your actual followers */}
            <div className="font-mono text-xs text-gray-600">1.2k followers</div>
          </div>
        </div>
        
        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-3 gap-1">
          {/* Creates a 3x3 grid of placeholder posts */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-400 border border-gray-600 flex items-center justify-center"
              // Replace with actual Instagram post images
            >
              <span className="text-xs font-mono text-gray-600">POST</span>
            </div>
          ))}
        </div>
        
        {/* To display actual Instagram posts, replace the placeholder divs above with:
            <img 
              src="path/to/instagram/post.jpg" 
              alt="Instagram post"
              className="aspect-square object-cover border border-gray-600" 
            />
        */}
      </div>
      
      {/* Follow Button */}
      <div className="text-center">
        <button className="bg-blue-500 text-white border-2 border-gray-600 px-4 py-1 font-mono text-xs hover:bg-blue-400">
          {/* This button could link to your actual Instagram profile */}
          Follow on Instagram
        </button>
      </div>
    </div>
  );
};

export default InstagramWindow;
