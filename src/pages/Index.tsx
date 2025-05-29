
import React, { useState } from 'react';
import Desktop from '../components/Desktop';
import Taskbar from '../components/Taskbar';
import WindowManager from '../components/WindowManager';

/**
 * Main Index page component - Acts as the Windows 95 style desktop
 * This is the root component that manages the overall state of the desktop interface
 */
const Index = () => {
  // State to track which windows are currently open (array of window IDs)
  const [openWindows, setOpenWindows] = useState<string[]>(['about']);
  
  // State to track which window is currently focused/active
  const [activeWindow, setActiveWindow] = useState<string>('about');

  /**
   * Function to open a new window or focus an existing one
   * @param windowId - The unique identifier for the window (e.g., 'about', 'portfolio')
   */
  const openWindow = (windowId: string) => {
    // Only add to openWindows if it's not already open
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
    }
    // Always set as active when opened/clicked
    setActiveWindow(windowId);
  };

  /**
   * Function to close a window and update the active window state
   * @param windowId - The unique identifier for the window to close
   */
  const closeWindow = (windowId: string) => {
    // Remove the window from the open windows array
    setOpenWindows(openWindows.filter(id => id !== windowId));
    
    // If we're closing the active window, switch to another open window or none
    if (activeWindow === windowId) {
      const remainingWindows = openWindows.filter(id => id !== windowId);
      setActiveWindow(remainingWindows[0] || '');
    }
  };

  /**
   * Function to bring a window to the front (make it active)
   * @param windowId - The unique identifier for the window to focus
   */
  const focusWindow = (windowId: string) => {
    setActiveWindow(windowId);
  };

  return (
    // Main desktop container with Windows 95 style background gradient
    <div className="h-screen bg-gradient-to-b from-teal-400 to-blue-600 overflow-hidden relative">
      
      {/* Desktop Background Pattern - Creates the subtle diagonal lines effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 16px)`
        }}></div>
      </div>
      
      {/* Desktop Icons Component - Renders clickable icons on the desktop */}
      <Desktop onOpenWindow={openWindow} />
      
      {/* Window Manager - Handles all open windows and their positioning */}
      <WindowManager 
        openWindows={openWindows}
        activeWindow={activeWindow}
        onClose={closeWindow}
        onFocus={focusWindow}
      />
      
      {/* Taskbar Component - The bottom bar with Start button, window buttons, and clock */}
      <Taskbar 
        openWindows={openWindows}
        activeWindow={activeWindow}
        onFocus={focusWindow}
      />
    </div>
  );
};

export default Index;
