import CryptoJS from 'crypto-js';

/**
 * Service responsible for generating authentication tokens for NPAW API requests.
 * Provides methods for generating MD5 hashes and authentication tokens.
 */
export class TokenService {
  /**
   * Generates an MD5 hash for the given message
   * @param message - The message to hash
   * @returns The MD5 hash as a string
   * @internal
   */
  generateHash(message: string): string {
    // Use CryptoJS for MD5 hashing with UTF-8 encoding
    return CryptoJS.MD5(CryptoJS.enc.Utf8.parse(message)).toString();
  }

  /**
   * Generates an authentication token for the NPAW API
   * @param accountCode - The account code for authentication
   * @param preUrl - The URL path and query parameters to be authenticated
   * @param apiKey - The API key for authentication
   * @returns The generated authentication token
   */
  generateToken(accountCode: string, preUrl: string, apiKey: string): string {
    const data = `${accountCode}${preUrl}${apiKey}`;
    return this.generateHash(data);
  }
} 