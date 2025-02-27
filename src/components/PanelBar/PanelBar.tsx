import React, { ReactNode, useState, useEffect } from 'react';
import './PanelBar.css';

/**
 * Props for the PanelBar component
 */
interface PanelBarProps {
  /** Child components to render inside the panel */
  children: ReactNode;
  /** Title of the panel */
  title?: string;
  /** Whether the panel can be collapsed */
  collapsible?: boolean;
}

/**
 * A collapsible side panel component that can contain multiple child components.
 * Provides a header with a title and the ability to collapse/expand the panel.
 * 
 * @param children - Child components to render inside the panel
 * @param title - Title of the panel (defaults to 'Advanced Controls')
 * @param collapsible - Whether the panel can be collapsed (defaults to true)
 * @returns The rendered PanelBar component
 */
const PanelBar: React.FC<PanelBarProps> = ({ 
  children, 
  title = 'Advanced Controls', 
  collapsible = true
}) => {
  /** Whether the panel is currently collapsed */
  const [collapsed, setCollapsed] = useState<boolean>(false);
  
  /**
   * Toggles the collapsed state of the panel if it is collapsible
   */
  const toggleCollapse = () => {
    if (collapsible) {
      setCollapsed(!collapsed);
    }
  };

  // Update app container class when collapsed state changes
  useEffect(() => {
    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
      if (collapsed) {
        appContainer.classList.add('panel-collapsed');
      } else {
        appContainer.classList.remove('panel-collapsed');
      }
    }
  }, [collapsed]);

  return (
    <div className={`side-panel ${collapsed ? 'collapsed' : ''}`}>
      <div 
        className="panel-header" 
        onClick={toggleCollapse}
        title={collapsed ? 'Expand panel' : 'Collapse panel'}
      >
        <h2 className="panel-title">{title}</h2>
        <div className="vertical-title">{title}</div>
      </div>
      
      <div className="panel-content">
        {React.Children.map(children, (child, index) => (
          <div className="panel-item" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export { PanelBar }; 