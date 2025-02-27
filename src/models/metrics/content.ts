/**
 * Type representing content consumption metrics collected by NPAW.
 * These metrics provide insights into how users interact with and complete media content.
 */
export enum ContentMetrics {
  /** Percentage of media content completed on average */
  CompletionRate = 'completionRate',
  /** Ratio of total plays to completion rate */
  ViewsVsCompletionRate = 'viewsVsCompletionRate',
  /** Average time in seconds when users exit the media */
  ExitTime = 'exitTime',
  /** Average duration in seconds of media content */
  MediaDuration = 'mediaDuration',
  /** Average percentage of playhead position at end of play */
  PlayheadCompletion = 'playheadCompletion',
}

export const contentMetricsConfig = {
  [ContentMetrics.CompletionRate]: {
    code: ContentMetrics.CompletionRate,
    description: 'Percentage of media content completed on average',
  },
  [ContentMetrics.ViewsVsCompletionRate]: {
    code: ContentMetrics.ViewsVsCompletionRate,
    description: 'Ratio of total plays to completion rate',
  },
  [ContentMetrics.ExitTime]: {
    code: ContentMetrics.ExitTime,
    description: 'Average time in seconds when users exit the media',
  },
  [ContentMetrics.MediaDuration]: {
    code: ContentMetrics.MediaDuration,
    description: 'Average duration in seconds of media content',
  },
  [ContentMetrics.PlayheadCompletion]: {
    code: ContentMetrics.PlayheadCompletion,
    description: 'Average percentage of playhead position at end of play',
  },
} as const; 