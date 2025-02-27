import React, { useEffect, useState, useRef } from 'react';
import NpawPluginService, { AdapterType } from '@services/npaw/plugins/NpawPluginService';
import './BitRateSelector.css';

/**
 * Interface representing a single bitrate measurement record
 */
interface BitrateRecord {
    /** The bitrate value in bps or Mbps */
    value: number;
    /** Timestamp when the bitrate was recorded */
    timestamp: string;
    /** Whether the bitrate is in custom format (Mbps) */
    isCustom: boolean;
}

/**
 * Component for managing and selecting video quality levels.
 * 
 * @example
 * <BitRateSelector />
 */
const BitRateSelector: React.FC = () => {
    /** Current bitrate value */
    const [bitrate, setBitrate] = useState<number>(0);
    /** Whether the custom adapter (Mbps) is being used */
    const [isCustomAdapter, setIsCustomAdapter] = useState<boolean>(false);
    /** History of bitrate changes */
    const [bitrateHistory, setBitrateHistory] = useState<BitrateRecord[]>([]);
    /** Whether the history panel is visible */
    const [showHistory, setShowHistory] = useState<boolean>(false);
    /** Whether the history panel is in the process of closing */
    const [isClosing, setIsClosing] = useState<boolean>(false);
    /** Whether the bitrate value is being updated */
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    /** Reference to the timeout used for animations */
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    /** Instance of the NPAW plugin service */
    const npawService = NpawPluginService.getInstance();

    useEffect(() => {
        const subscription = npawService.getBitrateStream().subscribe(newBitrate => {
            setBitrate(newBitrate);
            setIsUpdating(true);
            setTimeout(() => setIsUpdating(false), 600);
            
            const newRecord: BitrateRecord = {
                value: newBitrate,
                timestamp: new Date().toLocaleTimeString(),
                isCustom: isCustomAdapter
            };
            setBitrateHistory(prev => [...prev, newRecord].slice(-50)); // Keep last 10 records
        });

        // Check initial adapter type
        const currentConfig = npawService.getCurrentAdapterConfig();
        setIsCustomAdapter(currentConfig.path === AdapterType.VIDEOJS_CUSTOM);

        return () => {
            subscription.unsubscribe();
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isCustomAdapter]);

    /**
     * Toggles between bps and Mbps units
     */
    const toggleUnit = () => {
        const newAdapterType = isCustomAdapter ? AdapterType.VIDEOJS : AdapterType.VIDEOJS_CUSTOM;
        npawService.updateAdapterConfig(newAdapterType);
        
        // Convert bitrate based on adapter type
        const newBitrate = bitrate * (isCustomAdapter ? 1000000 : 0.000001);
        npawService.setBitrate(newBitrate);
        
        setIsCustomAdapter(!isCustomAdapter);
    };

    /**
     * Toggles the visibility of the bitrate history panel
     */
    const toggleHistory = () => {
        if (showHistory) {
            setIsClosing(true);
            timeoutRef.current = setTimeout(() => {
                setShowHistory(false);
                setIsClosing(false);
            }, 400); // Match the CSS transition duration
        } else {
            setShowHistory(true);
        }
    };

    /**
     * Formats a bitrate value for display
     * @param value - The bitrate value to format
     * @param isCustom - Whether to format in Mbps (true) or bps (false)
     * @returns The formatted bitrate string
     */
    const formatBitrate = (value: number | undefined, isCustom: boolean) => {
        if (value === undefined || value === null) {
            return '-- bps';
        }
        if (isCustom) {
            return `${value.toFixed(2)} Mbps`;
        } else {
            return `${value.toLocaleString()} bps`;
        }
    };

    return (
        <div className="bitrate-container">
            <div className="bitrate-display">
                <div className="bitrate-label">
                    Current Bitrate
                </div>
                <div className={`bitrate-value ${isUpdating ? 'updating' : ''}`}>
                    {formatBitrate(bitrate, isCustomAdapter)}
                </div>
            </div>
            <div className="bitrate-controls">
                <button onClick={toggleUnit} className="toggle-button">
                    Switch to {!isCustomAdapter ? 'Mbps' : 'bps'}
                </button>
                <button 
                    onClick={toggleHistory} 
                    className="history-toggle-button"
                >
                    {showHistory ? 'Hide' : 'History'}
                </button>
            </div>
            {showHistory && (
                <div className={`bitrate-history ${isClosing ? 'closing' : ''}`}>
                    <h3>Bitrate History</h3>
                    <div className="history-list">
                        {bitrateHistory.length > 0 ? (
                            bitrateHistory.map((record, index) => (
                                <div key={index} className="history-item">
                                    <span className="history-time">{record.timestamp}</span>
                                    <span className="history-value">
                                        {formatBitrate(record.value, record.isCustom)}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div className="history-item empty">
                                <span>No bitrate changes recorded yet</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export { BitRateSelector };