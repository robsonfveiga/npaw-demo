/**
 * Interface representing peer-to-peer (P2P) traffic metrics collected by NPAW.
 * These metrics track the distribution of traffic between CDN and P2P networks.
 */
export enum P2PMetrics {
  /** Total traffic served through Content Delivery Network in gigabytes */
  CDNTraffic = 'cdnTraffic',
  /** Total traffic served through peer-to-peer network in gigabytes */
  P2PTraffic = 'p2pTraffic',
  /** Percentage of total traffic served through P2P network (0-100) */
  P2PTrafficRatio = 'p2pTrafficRatio',
}

export const p2pMetricsConfig = {
  [P2PMetrics.CDNTraffic]: {
    code: P2PMetrics.CDNTraffic,
    description: 'Total traffic served through Content Delivery Network in gigabytes',
  },
  [P2PMetrics.P2PTraffic]: {
    code: P2PMetrics.P2PTraffic,
    description: 'Total traffic served through peer-to-peer network in gigabytes',
  },
  [P2PMetrics.P2PTrafficRatio]: {
    code: P2PMetrics.P2PTrafficRatio,
    description: 'Percentage of total traffic served through P2P network (0-100)',
  },
} as const; 