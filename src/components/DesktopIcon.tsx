
import React, { useState } from 'react';

interface DesktopIconProps {
  id: string;
  label: string;
  icon: string;
  x: number;  // X position in pixels
  y: number;  // Y position in pixels
  onDoubleClick: () => void;
}

/**
 * DesktopIcon Component - Individual clickable desktop icon
 * Mimics Windows 95 style desktop icons with selection and double-click behavior
 */
const DesktopIcon = ({ label, icon, x, y, onDoubleClick }: DesktopIconProps) => {
  // State to track if this icon is currently selected (clicked once)
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      // Absolute positioning allows precise placement on the desktop
      className={`absolute flex flex-col items-center cursor-pointer select-none p-2 rounded ${
        // Windows 95 style selection highlight - blue background when selected
        isSelected ? 'bg-blue-600 bg-opacity-50' : ''
      }`}
      style={{ left: x, top: y }}
      // Single click selects/deselects the icon
      onClick={() => setIsSelected(!isSelected)}
      // Double click opens the associated window
      onDoubleClick={onDoubleClick}
    >
      {/* Icon display - using emoji/unicode characters for now */}
      {/* To use actual images: replace with <img src="path/to/icon.png" alt={label} /> */}
      <div className="text-3xl mb-1 pixelated">{icon}</div>
      
      {/* Icon label with retro styling */}
      <div className="text-white text-xs text-center font-mono drop-shadow-md">
        {label}
      </div>
    </div>
  );
};

export default DesktopIcon;
