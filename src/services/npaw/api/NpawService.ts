import { NpawConfig } from '@/Config/NpawConfig';
import { ApiUrlParams } from '@models/ApiUrlParams';
import { MetricsResponse } from '@models/ApiResponse';
import { TokenService } from './TokenService';
import { NpawUrlBuilder } from './UrlBuilder';
import { ApiEndpoints } from '@models/index';
import { UserInfo } from '@models/UserInfo';
/**
 * Service for interacting with the NPAW API.
 * Handles authentication, URL generation, and data fetching from NPAW endpoints.
 */
export class NpawApiService {
  /** Base URL for the NPAW API */
  private readonly host = 'https://api.npaw.com';
  /** Account code for NPAW API authentication */
  private readonly accountCode: string;
  /** API key for NPAW API authentication */
  private readonly apiKey: string;
  /** Service for handling token generation */
  private readonly tokenService: TokenService;
  /** Service for building API URLs */
  private readonly urlBuilder: NpawUrlBuilder;
  /** Available API endpoints */
  private readonly apiEndpoints: ApiEndpoints;
  
  /**
   * Creates a new instance of the NPAW API service
   * @param endpoints - The API endpoints to use
   */
  constructor(endpoints: ApiEndpoints) {
    this.accountCode = `/${NpawConfig.ACCOUNT_CODE}`;
    this.apiKey = NpawConfig.API_KEY;
    this.tokenService = new TokenService();
    this.urlBuilder = new NpawUrlBuilder();
    this.apiEndpoints = endpoints;
  }

  /**
   * Get User IP Address
   * @returns Promise resolving to the user's IP address
   */ 
  async getUserInfo(): Promise<UserInfo> {
    const response = await fetch(`https://ipinfo.io?token=${NpawConfig.IP_INFO_TOKEN}`);
    return await response.json() as UserInfo;
  }
  
  /**
   * Creates an authenticated URL for accessing NPAW API endpoints
   * @param params - Optional parameters for the URL
   * @returns Promise resolving to the authenticated URL
   * @throws Error if URL generation fails
   */
  async createAuthenticatedUrl(params?: ApiUrlParams): Promise<string> {
    const defaultParams: ApiUrlParams = {
      fromDate: "last6hours",
      toDate: new Date(),
      metrics: ['views'],
      granularity: "",
      viewType: ["all"],
      filters: [
        {
          name: "MyIP",
          rules: {
            ip: [(await this.getUserInfo()).ip]
          }
        }
      ],
      ttlMs: 31536000000, // 1 year in milliseconds
    }
    const mergedParams = { ...defaultParams, ...params };

    // Build the pre-URL using the URL builder
    const preUrl = this.urlBuilder.buildPreUrl(this.apiEndpoints, mergedParams);
    
    // Generate the authentication token
    const token = this.tokenService.generateToken(this.accountCode, preUrl, this.apiKey);
    
    // Construct the final URL with the token
    return `${this.host}${this.accountCode}${preUrl}&token=${token}`;
  }

  /**
   * Fetches metrics data from the NPAW API
   * @param params - Parameters for the metrics request
   * @returns Promise resolving to the metrics response
   * @throws Error if the API request fails
   */
  async fetchMetrics(params: ApiUrlParams): Promise<MetricsResponse> {
    try {
      const url = await this.createAuthenticatedUrl(params);
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
      }
      
      const data = await response.json() as MetricsResponse;
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching metrics data:', error);
      return {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        error: {
          code: 'API_REQUEST_FAILED',
          details: error instanceof Error ? error.stack : undefined
        },
        metadata: {
          account: NpawConfig.ACCOUNT_CODE,
          timestamp: Date.now(),
          refresh: 0
        }
      };
    }
  }
}
