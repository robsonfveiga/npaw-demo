/**
 * Configuration class for NPAW API credentials and video source.
 * Loads and validates required environment variables at startup.
 */
export class NpawConfig {
  private static _accountCode: string;
  private static _apiKey: string;
  private static _videoSrc: string;
  private static _ipInfoToken: string;
  
  /** 
   * NPAW account code for API authentication
   * @returns {string} The account code
   */
  public static get ACCOUNT_CODE(): string { return this._accountCode; }
  
  /** 
   * NPAW API key for API authentication
   * @returns {string} The API key
   */
  public static get API_KEY(): string { return this._apiKey; }
  
  /** 
   * Video source URL for the player
   * @returns {string} The video source URL
   */
  public static get VIDEO_SOURCE(): string { return this._videoSrc; }
  
  /** 
   * IP Info token for geolocation services
   * @returns {string} The IP Info token
   */
  public static get IP_INFO_TOKEN(): string { return this._ipInfoToken; }

  /**
   * Static initialization block that loads and validates environment variables
   * @throws Error if required environment variables are not set
   */
  static {
    const ACCOUNT_CODE: string | undefined = import.meta.env.VITE_NPAW_ACCOUNT_CODE;
    const API_KEY: string | undefined = import.meta.env.VITE_NPAW_API_KEY;
    const VIDEO_SRC: string | undefined = import.meta.env.VITE_VIDEO_SRC;
    const IP_INFO_TOKEN: string | undefined = import.meta.env.VITE_IP_INFO_TOKEN;

    // Validate each environment variable with specific error messages
    if (!ACCOUNT_CODE) {
      throw new Error('NPAW_ACCOUNT_CODE is required in environment variables');
    }
    if (!API_KEY) {
      throw new Error('NPAW_API_KEY is required in environment variables');
    }
    if (!VIDEO_SRC) {
      throw new Error('VIDEO_SRC is required in environment variables');
    }
    if (!IP_INFO_TOKEN) {
      throw new Error('IP_INFO_TOKEN is required in environment variables');
    }

    // Assign validated values
    NpawConfig._accountCode = ACCOUNT_CODE;
    NpawConfig._apiKey = API_KEY;
    NpawConfig._videoSrc = VIDEO_SRC;
    NpawConfig._ipInfoToken = IP_INFO_TOKEN;
  }
}
