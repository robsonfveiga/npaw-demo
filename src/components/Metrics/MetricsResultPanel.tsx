import { MetricsResponse } from '@/models/ApiResponse';
import { useEffect, useState } from 'react';
import './MetricsResultPanel.css';

/**
 * Props for the MetricsResultPanel component
 */
interface Props {
    /** Optional title for the metrics panel */
    title?: string;
    /** Descriptions for each metric code */
    descriptions?: { [key: string]: string };
    /** Metrics data payload to display */
    payload?: MetricsResponse | undefined;
}

/**
 * Component that displays metrics data in a panel format.
 * Shows metric values with labels and supports hover descriptions.
 * Includes a pulse animation effect when data updates.
 * 
 * @param props - The component props
 * @returns A panel displaying the metrics data or a "No data available" message
 */
export const MetricsResultPanel = ({ descriptions, payload }: Props) => {
    const [shouldPulse, setShouldPulse] = useState(false);

    // Trigger pulse animation whenever payload changes
    useEffect(() => {
        if (payload) {
            setShouldPulse(true);
            // Remove the pulse class after animation completes
            const timer = setTimeout(() => {
                setShouldPulse(false);
            }, 1500); // Match this with the CSS animation duration
            return () => clearTimeout(timer);
        }
    }, [payload]);

    return (
        payload ? (
            <div className="metrics-panel">
                {payload.data?.map((item, i) => (
                    <div key={i} className="metrics-category">
                        {item.metrics.map((metric, j) => (
                            <div 
                                key={j} 
                                className={`metrics-item ${shouldPulse ? 'pulse' : ''}`}
                                title={descriptions ? descriptions[metric.code] : ''}
                            >
                                <span className={`metrics-item-label ${shouldPulse ? 'pulse' : ''}`}>{metric.label}:</span>
                                <span className={`metrics-item-value ${shouldPulse ? 'pulse' : ''}`}>{metric.values[0]?.data[0]?.value ?? 'N/A'}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        ) : (
            <div className="metrics-panel">
                <span className="metrics-no-data">No data available</span>
            </div>
        )
    );
};
