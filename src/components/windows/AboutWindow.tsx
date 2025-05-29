
import React from 'react';

/**
 * AboutWindow Component - Content for the "About Me" window
 * Contains artist profile information, biography, and skills
 * Styled to match Windows 95 interface elements
 */
const AboutWindow = () => {
  return (
    <div className="space-y-4">
      
      {/* Profile Header Section */}
      <div className="flex items-start space-x-4">
        {/* Profile Picture Placeholder */}
        {/* To add a real image: replace with <img src="path/to/profile.jpg" alt="Profile" className="w-20 h-20 border-2 border-gray-600" /> */}
        <div className="w-20 h-20 bg-gray-400 border-2 border-gray-600 flex items-center justify-center">
          <span className="text-2xl">👤</span>
        </div>
        
        {/* Basic Profile Info */}
        <div>
          <h2 className="font-mono font-bold text-lg mb-2">Artist Profile</h2>
          <p className="font-mono text-sm text-gray-700">
            Contemporary artist exploring digital and traditional mediums.
          </p>
        </div>
      </div>
      
      {/* Biography Section */}
      <div className="border-2 border-gray-600 p-3 bg-white">
        <h3 className="font-mono font-bold mb-2">Biography</h3>
        <p className="font-mono text-sm text-gray-700 leading-relaxed">
          Welcome to my artistic journey. Through various mediums and expressions, 
          I explore the boundaries between traditional and contemporary art forms.
          My work draws inspiration from urban landscapes, natural forms, and the 
          interplay between light and shadow.
        </p>
        {/* Edit this text to customize your biography */}
      </div>
      
      {/* Skills Section */}
      <div className="border-2 border-gray-600 p-3 bg-white">
        <h3 className="font-mono font-bold mb-2">Skills</h3>
        <ul className="font-mono text-sm text-gray-700">
          {/* Edit these skills to match your actual abilities */}
          <li>• Digital Art & Illustration</li>
          <li>• Traditional Painting</li>
          <li>• Photography</li>
          <li>• Mixed Media Sculpture</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutWindow;
