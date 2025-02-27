/**
 * Interface representing URL parameters for API requests
 */
export interface ApiUrlParams {
  /**
   * Starting date for data retrieval (e.g., "lastminute", ISO string, or Date object)
   * @default "last6hours"
   */
  fromDate?: Date | string;
  
  /**
   * Ending date for data retrieval
   * @default Current timestamp
   */
  toDate?: Date | string;
  
  /**
   * Metrics to retrieve from the API
   * @default ['views']
   */
  metrics?: string[];
  
  /**
   * Time granularity for the data (e.g., "minute", "hour", "day", "month")
   * @default ""
   */
  granularity?: string;
  
  /**
   * Time-to-live in milliseconds for the generated URL
   * @default 31536000000 (1 year)
   */
  ttlMs?: number;
  
  /**
   * Type of views to filter by
   * @default []
   */
  viewType?: ('vod' | 'live' | 'all')[];
  
  /**
   * Field to group results by
   */
  groupBy?: string;
  
  /**
   * Field to order results by
   */
  orderBy?: string;
  
  /**
   * Maximum number of results to return
   */
  limit?: number;
  
  /**
   * Direction to order results
   */
  orderDirection?: 'asc' | 'desc';
} 