
import React, { useState, useRef } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  initialX: number;  // Starting X position
  initialY: number;  // Starting Y position
  onClose: () => void;
  onFocus: () => void;
}

/**
 * Window Component - Individual draggable window with Windows 95 styling
 * Handles window dragging, focusing, and the classic window controls
 */
const Window = ({ title, children, isActive, initialX, initialY, onClose, onFocus }: WindowProps) => {
  // Current position of the window
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  
  // Dragging state and offset for smooth dragging
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  // Reference to the window element for drag calculations
  const windowRef = useRef<HTMLDivElement>(null);

  /**
   * Initiates window dragging when title bar is clicked
   * @param e - Mouse event from the title bar
   */
  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      // Calculate offset from mouse position to window top-left corner
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
      onFocus(); // Bring window to front when dragging starts
    }
  };

  /**
   * Updates window position during drag
   * @param e - Mouse move event
   */
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  /**
   * Ends the dragging operation
   */
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Set up global mouse event listeners for dragging
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={windowRef}
      className={`absolute bg-gray-200 border-2 ${
        // Active windows have darker border, inactive windows have lighter border
        isActive ? 'border-gray-800' : 'border-gray-500'
      } shadow-lg min-w-80 min-h-60`}
      style={{
        left: position.x,
        top: position.y,
        // Active windows appear above inactive ones
        zIndex: isActive ? 1000 : 999,
      }}
      // Clicking anywhere on window brings it to front
      onClick={onFocus}
    >
      
      {/* Window Title Bar - The draggable header */}
      <div
        className={`flex items-center justify-between px-2 py-1 cursor-move ${
          // Windows 95 style: blue for active, gray for inactive
          isActive ? 'bg-blue-600' : 'bg-gray-400'
        }`}
        onMouseDown={handleMouseDown}
      >
        {/* Window Title */}
        <span className={`font-mono text-sm font-bold ${
          isActive ? 'text-white' : 'text-gray-700'
        }`}>
          {title}
        </span>
        
        {/* Window Control Buttons (Minimize, Maximize, Close) */}
        <div className="flex space-x-1">
          {/* Minimize Button - Currently non-functional, can be implemented */}
          <button className="w-4 h-4 bg-gray-300 border border-gray-600 flex items-center justify-center text-xs hover:bg-gray-100">
            <Minus size={8} />
          </button>
          
          {/* Maximize Button - Currently non-functional, can be implemented */}
          <button className="w-4 h-4 bg-gray-300 border border-gray-600 flex items-center justify-center text-xs hover:bg-gray-100">
            <Square size={6} />
          </button>
          
          {/* Close Button - Functional, closes the window */}
          <button 
            className="w-4 h-4 bg-red-500 border border-gray-600 flex items-center justify-center text-xs hover:bg-red-400"
            onClick={onClose}
          >
            <X size={8} className="text-white" />
          </button>
        </div>
      </div>

      {/* Window Content Area */}
      <div className="p-4 bg-gray-200 max-h-96 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Window;
