import { FC, useState, useEffect } from 'react';
import { Metadata } from '@/models/ApiResponse';
import './RefreshInfo.css';
import { UserInfo } from '@/models/UserInfo';

/**
 * Props for the RefreshInfo component
 */
interface RefreshInfoProps {
  /**
   * Metadata information
   */
  metadata: Metadata | undefined;
  
  /**
   * Callback function triggered on refresh
   */
  onRefresh: () => void;
  
  /**
   * User information
   */
  userInfo: UserInfo | undefined;
}

/**
 * Component that displays refresh information and progress
 */
export const RefreshInfo: FC<RefreshInfoProps> = ({ metadata, onRefresh, userInfo }) => {
  if (!metadata) return null;

  const [progress, setProgress] = useState(0);
  const [lastRefresh, setLastRefresh] = useState(Date.now());
  const [nextRefresh, setNextRefresh] = useState(Date.now() + 10000); // 10 seconds from now
  const REFRESH_INTERVAL = 10000; // 10 seconds in milliseconds

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    const updateProgress = () => {
      const now = Date.now();
      const current = Math.min(now, nextRefresh);
      const percentage = ((current - lastRefresh) / REFRESH_INTERVAL) * 100;
      setProgress(Math.min(percentage, 100));

      // If we've reached the refresh time, update the timestamps and trigger data refresh
      if (now >= nextRefresh) {
        setLastRefresh(now);
        setNextRefresh(now + REFRESH_INTERVAL);
        setProgress(0);
        onRefresh(); // Trigger the data refresh
      }
    };

    // Initial update
    updateProgress();
    
    // Update progress every 100ms for smoother animation
    intervalId = setInterval(updateProgress, 100);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [lastRefresh, nextRefresh, onRefresh]);

  return (
    <div className="refresh-info">
      <div className="refresh-details-container">
        <div className="refresh-detail">
          <span className="refresh-label">Last Update:</span>
          <span className="refresh-value">{formatTime(lastRefresh)}</span>
        </div>
        <div className="refresh-detail">
          <span className="refresh-label">Next Refresh:</span>
          <span className="refresh-value">{formatTime(nextRefresh)}</span>
        </div>
      </div>
      <div className="refresh-detail">
          <span className="refresh-label">Account:</span>
          <span className="refresh-value">{metadata.account}</span>
        </div>
      <div className="refresh-progress-container">
        <div className="refresh-progress-bar">
          <div 
            className="refresh-progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="refresh-progress-text">
          {Math.round(progress)}% until next refresh ({Math.ceil((nextRefresh - Date.now()) / 1000)}s)
          {userInfo && (
            <div className="user-info">
              {userInfo.ip}
              <br/>
              {userInfo.city.toLowerCase()}/{userInfo.country.toUpperCase()}
            </div>
          )}
        </span>
      </div>
    </div>
  );
}; 