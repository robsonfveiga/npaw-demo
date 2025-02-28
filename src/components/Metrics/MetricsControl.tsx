import { useState, useCallback, useEffect } from 'react';
import './MetricsControl.css';
import { NpawApiService } from '@/services/npaw/api/NpawService';
import { ApiEndpoints } from '@/models/ApiEndpoints';
import { ApiUrlParams } from '@/models/ApiUrlParams';
import { MetricsResponse, Metadata } from '@/models/ApiResponse';
import { MetricsResultPanel } from './MetricsResultPanel';
import { RefreshInfo } from './RefreshInfo';
import { AudienceMetrics, audienceMetricsConfig } from '@/models/metrics/audience';
import { QualityMetrics, qualityMetricsConfig } from '@/models/metrics/quality';
import { ErrorsMetrics, errorsMetricsConfig } from '@/models/metrics/errors';
import { EngagementMetrics, engagementMetricsConfig } from '@/models/metrics/engagement';
import { RenditionsMetrics, renditionsMetricsConfig } from '@/models/metrics/renditions';
import { P2PMetrics, p2pMetricsConfig } from '@/models/metrics/p2p';    
import { UserInfo } from '@/models/UserInfo';

const categories = [
  { 
    name: 'Audience', 
    metrics: Object.values(AudienceMetrics),
    config: audienceMetricsConfig
  },
  { 
    name: 'Quality', 
    metrics: Object.values(QualityMetrics),
    config: qualityMetricsConfig
  },
  { 
    name: 'Errors', 
    metrics: Object.values(ErrorsMetrics),
    config: errorsMetricsConfig
  },
  { 
    name: 'Engagement', 
    metrics: Object.values(EngagementMetrics),
    config: engagementMetricsConfig
  },
  { 
    name: 'Renditions', 
    metrics: Object.values(RenditionsMetrics),
    config: renditionsMetricsConfig
  },
  { 
    name: 'P2P', 
    metrics: Object.values(P2PMetrics),
    config: p2pMetricsConfig
  },
];

const npawService = new NpawApiService(ApiEndpoints.Metrics);

/**
 * Component that provides controls for selecting and displaying different categories of metrics.
 * Manages the loading and display of metric data from the NPAW API.
 * 
 * @returns A component with category selection, refresh controls, and metric display
 */
export const MetricsControl = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [loadedCaterory, setLoadedCategory] = useState<{ category: string; metrics: MetricsResponse, config: object } | undefined>(undefined);
  const [metadata, setMetadata] = useState<Metadata | undefined>(undefined);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    npawService.getUserInfo().then((userInfo) => {
      setUserInfo(userInfo);
    });
    loadCategoryData();
    
  }, []);

  const loadCategoryData = async () => {
    try {
      const category = categories.find(c => c.name === selectedCategory);
      if (!category) return;

      const params: ApiUrlParams = {
        metrics: category.metrics,
        viewType: ["all"]
      };
      
      const data = await npawService.fetchMetrics(params);
      setMetadata(data.metadata);
      setLoadedCategory({ 
        category: selectedCategory, 
        metrics: data,
        config: category.config
      });
    } catch (error) {
      console.error('Error loading category data:', error);
    }
  };

  // Memoize the loadCategoryData function to prevent unnecessary re-renders
  const handleRefresh = useCallback(() => {
    loadCategoryData();
  }, [selectedCategory]);

  useEffect(() => {
    handleRefresh();
  }, [selectedCategory]);

  

  return (
    <div className="metrics-control">
      <div className="metrics-selector-container">
        <select
          className="metrics-selector"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value)
            handleRefresh()
          }}
        >
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {metadata && (
      <div className="next-refresh-container">
          <RefreshInfo metadata={metadata} onRefresh={handleRefresh} userInfo={userInfo} />
      </div>
       )}
      <div>
        {loadedCaterory && (
          <MetricsResultPanel 
            config={loadedCaterory.config}
            payload={loadedCaterory.metrics} 
          />
        )}
      </div>
    </div>
  );
};
