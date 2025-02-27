import { ApiUrlParams } from '@models/ApiUrlParams';
import { ApiEndpoints } from '@models/index';
/**
 * Service responsible for constructing NPAW API URLs.
 * Handles the creation of properly formatted and encoded URLs with query parameters.
 */
export class NpawUrlBuilder {
  /**
   * Builds a pre-URL with query parameters for the NPAW API
   * @param apiEndpoints - The API endpoint to use
   * @param params - The API URL parameters to include
   * @returns The constructed pre-URL string
   * @throws Error if required date parameters are missing
   */
  buildPreUrl(apiEndpoints: ApiEndpoints, params: ApiUrlParams): string {
    if (!params.fromDate && !params.toDate) {
      throw new Error('Both fromDate and toDate are required');
    }

    // Calculate expiration time for dateToken
    const expirationTime = Date.now() + (params.ttlMs || 31536000000); // 1 year default
    
    // Create URLSearchParams object for proper parameter handling and encoding
    const searchParams = new URLSearchParams();
    
    // Add required parameters
    searchParams.set('fromDate', params.fromDate instanceof Date ? 
      params.fromDate.toISOString() : 
      String(params.fromDate || "lastminute"));
    
    searchParams.set('toDate', params.toDate instanceof Date ? 
      params.toDate.toISOString() : 
      String(params.toDate || Date.now()));
    
    searchParams.set('metrics', (params.metrics || ['views', 'activeSessions']).join(','));
    searchParams.set('dateToken', String(expirationTime));
    
    // Add optional parameters only if they have values
    if (params.granularity) {
      searchParams.set('granularity', params.granularity);
    }
    
    if (params.viewType && params.viewType.length > 0) {
      searchParams.set('type', params.viewType.join(','));
    }
    
    if (params.groupBy) {
      searchParams.set('groupBy', params.groupBy);
    }
    
    if (params.orderBy) {
      searchParams.set('orderBy', params.orderBy);
    }
    
    if (params.limit !== undefined) {
      searchParams.set('limit', String(params.limit));
    }
    
    if (params.orderDirection) {
      searchParams.set('orderDirection', params.orderDirection);
    }
    
    // Convert searchParams to string and append to endpoint
    return `${apiEndpoints}?${searchParams.toString()}`;
  }
} 