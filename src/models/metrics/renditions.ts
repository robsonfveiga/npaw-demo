export enum RenditionsMetrics {
  RenditionsPerView = 'renditionsPerView',
  RenditionSwitches = 'renditionSwitches',
  SwitchesPerView = 'switchesPerView',
}

export const renditionsMetricsConfig = {
  [RenditionsMetrics.RenditionsPerView]: {
    code: RenditionsMetrics.RenditionsPerView,
    description: 'Total renditions per view',
  },
  [RenditionsMetrics.RenditionSwitches]: {
    code: RenditionsMetrics.RenditionSwitches,
    description: 'Total rendition switches',
  },
  [RenditionsMetrics.SwitchesPerView]: {
    code: RenditionsMetrics.SwitchesPerView,
    description: 'Switches per view',
  },
} as const; 