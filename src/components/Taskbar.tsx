
import React from 'react';

interface TaskbarProps {
  openWindows: string[];
  activeWindow: string;
  onFocus: (windowId: string) => void;
}

/**
 * Taskbar Component - The bottom bar mimicking Windows 95 taskbar
 * Shows Start button, buttons for open windows, and a clock
 */
const Taskbar = ({ openWindows, activeWindow, onFocus }: TaskbarProps) => {
  
  /**
   * Converts window IDs to human-readable titles for taskbar buttons
   * @param windowId - The unique identifier for the window
   * @returns Display name for the taskbar button
   */
  const getWindowTitle = (windowId: string) => {
    switch (windowId) {
      case 'about': return 'About Me';
      case 'portfolio': return 'Portfolio';
      case 'contact': return 'Contact';
      case 'instagram': return 'Instagram';
      default: return windowId;
    }
  };

  return (
    // Fixed taskbar at bottom of screen
    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-400 border-t-2 border-gray-600 flex items-center px-2">
      
      {/* Start Button - Classic Windows 95 style */}
      {/* Currently non-functional - can be expanded to show a start menu */}
      <button className="bg-gray-300 border-2 border-gray-600 px-3 py-1 text-xs font-mono font-bold mr-2 hover:bg-gray-200">
        Start
      </button>

      {/* Window Buttons - Shows one button for each open window */}
      <div className="flex space-x-1">
        {openWindows.map((windowId) => (
          <button
            key={windowId}
            className={`px-3 py-1 text-xs font-mono border-2 ${
              // Active window button appears pressed/highlighted
              activeWindow === windowId
                ? 'bg-gray-200 border-gray-800'  // Pressed appearance
                : 'bg-gray-300 border-gray-600'  // Normal appearance
            } hover:bg-gray-200`}
            onClick={() => onFocus(windowId)}
          >
            {getWindowTitle(windowId)}
          </button>
        ))}
      </div>

      {/* Clock - Shows current time in bottom right */}
      <div className="ml-auto bg-gray-300 border-2 border-gray-600 px-2 py-1">
        <span className="text-xs font-mono">
          {/* Updates every render - for real-time clock, you'd need useEffect with setInterval */}
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
