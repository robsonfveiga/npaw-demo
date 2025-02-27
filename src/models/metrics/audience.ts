/**
 * Type representing audience-related metrics collected by NPAW.
 * These metrics provide insights into viewer engagement and platform usage.
 */
export enum AudienceMetrics {
  /** Count of plays still active at end of minute */
  ActiveSessions = 'activeSessions',
  /** Average effective playtime per play (minutes) */
  EffectiveTime = 'effectiveTime',
  /** Average total playtime per play (minutes) */
  Playtime = 'playtime',
  /** Concurrent plays at any minute point */
  Concurrent = 'concurrent',
  /** Total play attempts */
  Views = 'views',
  /** Successfully initiated plays */
  SuccessfulPlays = 'successfulPlays',
  /** Total playtime across all plays */
  Hours = 'hours',
  /** Play stop events */
  Stops = 'stops',
  /** Estimated unique subscribers */
  Subscribers = 'subscribers',
  /** Total traffic in GB */
  Traffic = 'traffic',
  /** Estimated unique users */
  Uniques = 'uniques',
  /** Plays with happiness score ≥8.5 */
  HappyPlays = 'happyPlays',
}

export const audienceMetricsConfig = {
  [AudienceMetrics.ActiveSessions]: {
    code: AudienceMetrics.ActiveSessions,
    description: 'Count of plays still active at end of minute',
  },
  [AudienceMetrics.EffectiveTime]: {
    code: AudienceMetrics.EffectiveTime,
    description: 'Average effective playtime per play (minutes)',
  },
  [AudienceMetrics.Playtime]: {
    code: AudienceMetrics.Playtime,
    description: 'Average total playtime per play (minutes)',
  },
  [AudienceMetrics.Concurrent]: {
    code: AudienceMetrics.Concurrent,
    description: 'Concurrent plays at any minute point',
  },
  [AudienceMetrics.Views]: {
    code: AudienceMetrics.Views,
    description: 'Total play attempts',
  },
  [AudienceMetrics.SuccessfulPlays]: {
    code: AudienceMetrics.SuccessfulPlays,
    description: 'Successfully initiated plays',
  },
  [AudienceMetrics.Hours]: {
    code: AudienceMetrics.Hours,
    description: 'Total playtime across all plays',
  },
  [AudienceMetrics.Stops]: {
    code: AudienceMetrics.Stops,
    description: 'Play stop events',
  },
  [AudienceMetrics.Subscribers]: {
    code: AudienceMetrics.Subscribers,
    description: 'Estimated unique subscribers',
  },
  [AudienceMetrics.Traffic]: {
    code: AudienceMetrics.Traffic,
    description: 'Total traffic in GB',
  },
  [AudienceMetrics.Uniques]: {
    code: AudienceMetrics.Uniques,
    description: 'Estimated unique users',
  },
  [AudienceMetrics.HappyPlays]: {
    code: AudienceMetrics.HappyPlays,
    description: 'Plays with happiness score ≥8.5',
  },
} as const; 