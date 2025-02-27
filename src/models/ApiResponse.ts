/**
 * Types and interfaces for API responses and metrics data
 */

/**
 * Interface representing the structure of an API response
 * 
 * @template T - The type of data contained in the response
 */
export interface ApiResponse<T> {
  /**
   * Status of the API response
   */
  status: 'success' | 'error';
  
  /**
   * Message from the API (usually present on errors)
   */
  message?: string;
  
  /**
   * Actual data returned by the API
   */
  data?: T;
  
  /**
   * Error information if status is 'error'
   */
  error?: {
    /**
     * Error code identifying the type of error
     */
    code: string;
    /**
     * Additional details about the error
     */
    details?: string;
  };
}

/**
 * Interface representing metrics data in the API response
 */
export interface MetricsData {
  /**
   * Name of the metric
   */
  name: string;
  /**
   * Type of metric (e.g., 'time-series', 'aggregate')
   */
  type: string;
  /**
   * Date range for the metric data as [start, end] timestamps
   */
  date: [number, number];
  /**
   * Timezone offset in minutes
   */
  offset: number;
  /**
   * Array of dimension values
   */
  dimensions: any[];
  /**
   * Metadata about the dimensions
   */
  dimensionsInfo: any[];
  /**
   * Array of metric values and metadata
   */
  metrics: Array<{
    /**
     * Array of value sets
     */
    values: Array<{
      /**
       * Array of data points
       */
      data: Array<{
        /**
         * The actual metric value (number or string)
         */
        value: number | string;
      }>;
    }>;
    /**
     * Metric code identifier
     */
    code: string;
    /**
     * Human-readable label for the metric
     */
    label: string;
    /**
     * Magnitude information for the metric
     */
    magnitudes: {
      /**
       * X-axis magnitude/unit
       */
      x: string;
      /**
       * Y-axis magnitude/unit
       */
      y: string;
    };
  }>;
}

/**
 * Metadata for the metrics data
 */
export interface Metadata {
  /**
   * Account identifier
   */
  account: string;
  /**
   * Timestamp of when the data was generated
   */
  timestamp: number;
  /**
   * Refresh interval in seconds
   */
  refresh: number;
}

/**
 * Specialized response type for metrics data
 * 
 * @extends ApiResponse<MetricsData[]>
 */
export type MetricsResponse = ApiResponse<MetricsData[]> & {
  /**
   * Metadata about the metrics response
   */
  metadata: Metadata;
}; 