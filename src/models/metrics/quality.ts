export enum QualityMetrics {
  Bitrate = 'bitrate',
  Bitratembps = 'bitratembps',
  AvgBufferTime = 'avgBufferTime',
  JoinTime = 'joinTime',
  Bandwidth = 'bandwidth',
  BandwidthGbps = 'bandwidthGbps',
  BufferRatio = 'bufferRatio',
  BufferTime = 'bufferTime',
  Errors = 'errors',
  PlaysVsErrors = 'playsVsErrors',
  Exits = 'exits',
  ExitsCount = 'exitsCount',
  BufferEvents = 'bufferEvents',
  InterruptionsRatio = 'interruptionsRatio',
  PlaybackStalls = 'playbackStalls',
}

export const qualityMetricsConfig = {
  [QualityMetrics.Bitrate]: {
    code: QualityMetrics.Bitrate,
    description: 'Weighted average bitrate (Mibps)',
  },
  [QualityMetrics.Bitratembps]: {
    code: QualityMetrics.Bitratembps,
    description: 'Weighted average bitrate (Mbps)',
  },
  [QualityMetrics.AvgBufferTime]: {
    code: QualityMetrics.AvgBufferTime,
    description: 'Average buffer duration',
  },
  [QualityMetrics.JoinTime]: {
    code: QualityMetrics.JoinTime,
    description: 'Average initial load time',
  },
  [QualityMetrics.Bandwidth]: {
    code: QualityMetrics.Bandwidth,
    description: 'Total bandwidth (Gibps)',
  },
  [QualityMetrics.BandwidthGbps]: {
    code: QualityMetrics.BandwidthGbps,
    description: 'Total bandwidth (Gbps)',
  },
  [QualityMetrics.BufferRatio]: {
    code: QualityMetrics.BufferRatio,
    description: 'Buffering time ratio',
  },
  [QualityMetrics.BufferTime]: {
    code: QualityMetrics.BufferTime,
    description: 'Total buffer time',
  },
  [QualityMetrics.Errors]: {
    code: QualityMetrics.Errors,
    description: 'Total error events',
  },
  [QualityMetrics.PlaysVsErrors]: {
    code: QualityMetrics.PlaysVsErrors,
    description: 'Errors per play ratio',
  },
  [QualityMetrics.Exits]: {
    code: QualityMetrics.Exits,
    description: 'Early exits percentage',
  },
  [QualityMetrics.ExitsCount]: {
    code: QualityMetrics.ExitsCount,
    description: 'Early exits count',
  },
  [QualityMetrics.BufferEvents]: {
    code: QualityMetrics.BufferEvents,
    description: 'Total buffer events',
  },
  [QualityMetrics.InterruptionsRatio]: {
    code: QualityMetrics.InterruptionsRatio,
    description: 'Buffer events ratio',
  },
  [QualityMetrics.PlaybackStalls]: {
    code: QualityMetrics.PlaybackStalls,
    description: 'Playback stall percentage',
  },
} as const; 