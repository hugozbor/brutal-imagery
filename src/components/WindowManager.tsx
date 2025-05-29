
import React from 'react';
import Window from './Window';
import AboutWindow from './windows/AboutWindow';
import PortfolioWindow from './windows/PortfolioWindow';
import ContactWindow from './windows/ContactWindow';
import InstagramWindow from './windows/InstagramWindow';

interface WindowManagerProps {
  openWindows: string[];
  activeWindow: string;
  onClose: (windowId: string) => void;
  onFocus: (windowId: string) => void;
}

/**
 * WindowManager Component - Manages all open windows and their content
 * This component handles the rendering of windows and their content based on window IDs
 */
const WindowManager = ({ openWindows, activeWindow, onClose, onFocus }: WindowManagerProps) => {
  
  /**
   * Returns the appropriate content component for each window type
   * @param windowId - The unique identifier for the window
   * @returns JSX element containing the window's content
   */
  const getWindowContent = (windowId: string) => {
    switch (windowId) {
      case 'about':
        return <AboutWindow />;
      case 'portfolio':
        return <PortfolioWindow />;
      case 'contact':
        return <ContactWindow />;
      case 'instagram':
        return <InstagramWindow />;
      default:
        return <div>Window not found</div>;
    }
    
    // To add a new window:
    // 1. Add a new case above
    // 2. Create the corresponding window component in src/components/windows/
    // 3. Import it at the top of this file
  };

  /**
   * Returns the display title for each window type
   * @param windowId - The unique identifier for the window
   * @returns String to display in the window's title bar
   */
  const getWindowTitle = (windowId: string) => {
    switch (windowId) {
      case 'about':
        return 'About Me';
      case 'portfolio':
        return 'Portfolio';
      case 'contact':
        return 'Contact';
      case 'instagram':
        return 'Instagram';
      default:
        return 'Unknown';
    }
  };

  return (
    <>
      {/* Render each open window */}
      {openWindows.map((windowId, index) => (
        <Window
          key={windowId}
          id={windowId}
          title={getWindowTitle(windowId)}
          isActive={activeWindow === windowId}
          // Cascade windows by offsetting each new window slightly
          initialX={100 + index * 30}
          initialY={50 + index * 30}
          onClose={() => onClose(windowId)}
          onFocus={() => onFocus(windowId)}
        >
          {getWindowContent(windowId)}
        </Window>
      ))}
    </>
  );
};

export default WindowManager;
