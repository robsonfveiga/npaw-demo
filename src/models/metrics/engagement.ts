/**
 * Interface representing user engagement metrics collected by NPAW.
 * These metrics analyze the relationship between technical performance and user engagement.
 */
export enum EngagementMetrics {
  /** Distribution of views across different bitrate levels (in Mbps) */
  ViewsVsBitrate = 'viewsVsBitrate',
  /** Distribution of views across different buffer ratios (percentage) */
  ViewsVsBuffer = 'viewsVsBuffer',
  /** Distribution of views by initial join time (in seconds) */
  ViewsVsJointime = 'viewsVsJointime',
  /** Distribution of views by playtime duration (in minutes) */
  ViewsVsPlaytime = 'viewsVsPlaytime',
  /** Correlation between playtime and video bitrate */
  PlaytimeVsBitrate = 'playtimeVsBitrate',
  /** Correlation between playtime and buffering ratio */
  PlaytimeVsBuffer = 'playtimeVsBuffer',
  /** Correlation between playtime and initial join time */
  PlaytimeVsJointime = 'playtimeVsJointime',
}

/**
 * Human-readable descriptions for each engagement metric.
 * Used for tooltips and documentation in the UI.
 */
export const engagementMetricsConfig = {
  [EngagementMetrics.ViewsVsBitrate]: {
    code: EngagementMetrics.ViewsVsBitrate,
    description: 'Distribution of views across different bitrate levels (in Mbps)',
  },
  [EngagementMetrics.ViewsVsBuffer]: {
    code: EngagementMetrics.ViewsVsBuffer,
    description: 'Distribution of views across different buffer ratios (percentage)',
  },
  [EngagementMetrics.ViewsVsJointime]: {
    code: EngagementMetrics.ViewsVsJointime,
    description: 'Distribution of views by initial join time (in seconds)',
  },
  [EngagementMetrics.ViewsVsPlaytime]: {
    code: EngagementMetrics.ViewsVsPlaytime,
    description: 'Distribution of views by playtime duration (in minutes)',
  },
  [EngagementMetrics.PlaytimeVsBitrate]: {
    code: EngagementMetrics.PlaytimeVsBitrate,
    description: 'Correlation between playtime and video bitrate',
  },
  [EngagementMetrics.PlaytimeVsBuffer]: {
    code: EngagementMetrics.PlaytimeVsBuffer,
    description: 'Correlation between playtime and buffering ratio',
  },
  [EngagementMetrics.PlaytimeVsJointime]: {
    code: EngagementMetrics.PlaytimeVsJointime,
    description: 'Correlation between playtime and initial join time',
  },
} as const; 