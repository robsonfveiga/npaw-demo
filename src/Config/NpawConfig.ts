/**
 * Configuration class for NPAW API credentials and video source.
 * Loads and validates required environment variables at startup.
 */
export class NpawConfig {
  private static _accountCode: string;
  private static _apiKey: string;
  private static _videoSrc: string;

  /** NPAW account code for API authentication */ 
  public static get ACCOUNT_CODE() { return this._accountCode; }
  /** NPAW API key for API authentication */
  public static get API_KEY() { return this._apiKey; }
  /** Video source URL for the player */
  public static get VIDEO_SOURCE() { return this._videoSrc; }

  /**
   * Static initialization block that loads and validates environment variables
   * @throws Error if required environment variables are not set
   */
  static {
    /**
     * Import environment variables from the application configuration
     */
    const ACCOUNT_CODE = import.meta.env.VITE_NPAW_ACCOUNT_CODE;
    const API_KEY = import.meta.env.VITE_NPAW_API_KEY;
    const VIDEO_SRC = import.meta.env.VITE_VIDEO_SRC;

    /**
     * Validate that all required environment variables are set
     * @throws Error if any required environment variable is missing
     */
    if (!ACCOUNT_CODE || !API_KEY || !VIDEO_SRC) {
      throw new Error(
        'VITE_NPAW_ACCOUNT_CODE, VITE_NPAW_API_KEY, and VITE_VIDEO_SRC must be set in environment variables'
      );
    }

    NpawConfig._accountCode = ACCOUNT_CODE;
    NpawConfig._apiKey = API_KEY;
    NpawConfig._videoSrc = VIDEO_SRC;
  }
}

export const ACCOUNT_CODE = import.meta.env.VITE_NPAW_ACCOUNT_CODE;
export const API_KEY = import.meta.env.VITE_NPAW_API_KEY;
export const VIDEO_SRC = import.meta.env.VITE_VIDEO_SRC;
