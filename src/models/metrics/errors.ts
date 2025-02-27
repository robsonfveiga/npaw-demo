/**
 * Interface representing error-related metrics collected by NPAW.
 * These metrics track various types of playback errors and their impact on user experience.
 */
export enum ErrorsMetrics {
  /** Total number of fatal errors occurring during playback */
  InStreamErrorCrashCount = 'inStreamErrorCrashCount',
  /** Percentage of plays that ended due to fatal playback errors */
  InStreamErrorCrash = 'inStreamErrorCrash',
  /** Percentage of plays that failed to start due to fatal errors */
  StartupErrorCrash = 'startupErrorCrash',
  /** Total number of plays that failed to start due to fatal errors */
  StartupErrorCrashCount = 'startupErrorCrashCount',
  /** Total number of non-fatal errors occurring during playback */
  InStreamErrorCount = 'inStreamErrorCount',
  /** Percentage of plays affected by non-fatal playback errors */
  InStreamError = 'inStreamError',
  /** Number of plays that terminated due to fatal playback errors */
  PlaysWithInStreamErrorCrashCount = 'playsWithInStreamErrorCrashCount',
  /** Percentage of total plays that terminated due to fatal errors */
  PlaysWithInStreamErrorCrash = 'playsWithInStreamErrorCrash',
  /** Number of plays that experienced non-fatal playback errors */
  PlaysWithInStreamErrorCount = 'playsWithInStreamErrorCount',
  /** Percentage of total plays that experienced non-fatal errors */
  PlaysWithInStreamError = 'playsWithInStreamError',
  /** Percentage of plays that experienced startup errors */
  StartupError = 'startupError',
  /** Total number of startup errors encountered */
  StartupErrorCount = 'startupErrorCount',
}

/**
 * Human-readable descriptions for each error metric.
 * Used for tooltips and documentation in the UI.
 */
export const errorsMetricsConfig = {
  [ErrorsMetrics.InStreamErrorCrashCount]: {
    code: ErrorsMetrics.InStreamErrorCrashCount,
    description: 'Total number of fatal errors occurring during playback',
  },
  [ErrorsMetrics.InStreamErrorCrash]: {
    code: ErrorsMetrics.InStreamErrorCrash,
    description: 'Percentage of plays that ended due to fatal playback errors',
  },
  [ErrorsMetrics.StartupErrorCrash]: {
    code: ErrorsMetrics.StartupErrorCrash,
    description: 'Percentage of plays that failed to start due to fatal errors',
  },
  [ErrorsMetrics.StartupErrorCrashCount]: {
    code: ErrorsMetrics.StartupErrorCrashCount,
    description: 'Total number of plays that failed to start due to fatal errors',
  },
  [ErrorsMetrics.InStreamErrorCount]: {
    code: ErrorsMetrics.InStreamErrorCount,
    description: 'Total number of non-fatal errors occurring during playback',
  },
  [ErrorsMetrics.InStreamError]: {
    code: ErrorsMetrics.InStreamError,
    description: 'Percentage of plays affected by non-fatal playback errors',
  },
  [ErrorsMetrics.PlaysWithInStreamErrorCrashCount]: {
    code: ErrorsMetrics.PlaysWithInStreamErrorCrashCount,
    description: 'Number of plays that terminated due to fatal playback errors',
  },
  [ErrorsMetrics.PlaysWithInStreamErrorCrash]: {
    code: ErrorsMetrics.PlaysWithInStreamErrorCrash,
    description: 'Percentage of total plays that terminated due to fatal errors',
  },
  [ErrorsMetrics.PlaysWithInStreamErrorCount]: {
    code: ErrorsMetrics.PlaysWithInStreamErrorCount,
    description: 'Number of plays that experienced non-fatal playback errors',
  },
  [ErrorsMetrics.PlaysWithInStreamError]: {
    code: ErrorsMetrics.PlaysWithInStreamError,
    description: 'Percentage of total plays that experienced non-fatal errors',
  },
  [ErrorsMetrics.StartupError]: {
    code: ErrorsMetrics.StartupError,
    description: 'Percentage of plays that experienced startup errors',
  },
  [ErrorsMetrics.StartupErrorCount]: {
    code: ErrorsMetrics.StartupErrorCount,
    description: 'Total number of startup errors encountered',
  },
} as const; 