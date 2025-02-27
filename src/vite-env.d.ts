/// <reference types="vite/client" />

/**
 * Type declarations for Vite environment variables
 */
interface ImportMetaEnv {
  /** NPAW account code for authentication */
  readonly VITE_NPAW_ACCOUNT_CODE: string
  /** NPAW API key for authentication */
  readonly VITE_NPAW_API_KEY: string
}

/**
 * Type declaration for Vite's ImportMeta
 */
interface ImportMeta {
  /** Environment variables available at runtime */
  readonly env: ImportMetaEnv
}
