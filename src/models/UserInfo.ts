/**
 * @interface UserInfo
 * @description Interface for user information
 */
export interface UserInfo {
    /**
     * @property {string} ip - User's IP address
     */
    ip: string;
    /**
     * @property {string} city - User's city
     */
    city: string;
    /**
     * @property {string} region - User's region
     */
    region: string;
    /**
     * @property {string} country - User's country
     */
    country: string;
    /**
     * @property {string} loc - User's location
     */
    loc: string;
    /**
     * @property {string} org - User's organization
     */
    org: string;
    /**
     * @property {string} postal - User's postal code
     */
    postal: string;
    /**
     * @property {string} timezone - User's timezone
     */
    timezone: string;
}