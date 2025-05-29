
import React from 'react';
import DesktopIcon from './DesktopIcon';

interface DesktopProps {
  onOpenWindow: (windowId: string) => void;
}

/**
 * Desktop Component - Renders the desktop icons on the left side
 * This component contains all the clickable icons that open different windows
 */
const Desktop = ({ onOpenWindow }: DesktopProps) => {
  /**
   * Desktop icons configuration
   * Each icon has:
   * - id: unique identifier used for window management
   * - label: text displayed under the icon
   * - icon: emoji or character displayed as the icon
   * - x, y: position coordinates on the desktop (in pixels)
   */
  const icons = [
    { id: 'about', label: 'About Me', icon: '👤', x: 20, y: 20 },
    { id: 'portfolio', label: 'Portfolio', icon: '🎨', x: 20, y: 120 },
    { id: 'contact', label: 'Contact', icon: '📧', x: 20, y: 220 },
    { id: 'instagram', label: 'Instagram', icon: '📷', x: 20, y: 320 },
  ];

  // To add more icons:
  // 1. Add a new object to the icons array above
  // 2. Create a corresponding window component in src/components/windows/
  // 3. Add the window case to WindowManager.tsx

  return (
    // Desktop container - takes up the full screen minus taskbar space
    <div className="absolute inset-0 p-4">
      {icons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          id={icon.id}
          label={icon.label}
          icon={icon.icon}
          x={icon.x}
          y={icon.y}
          onDoubleClick={() => onOpenWindow(icon.id)}
        />
      ))}
    </div>
  );
};

export default Desktop;
