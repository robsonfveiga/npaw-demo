# NPAW Video Player API Documentation

## Components

### Video Component
**Location**: `src/components/Video/Video.tsx`

The Video component is responsible for rendering and managing the video player using VideoJS and integrating with NPAW analytics.

#### Props
```typescript
interface VideoProps {
  options: {
    autoplay?: boolean;
    controls?: boolean;
    responsive?: boolean;
    fluid?: boolean;
    playbackRates?: number[];
    sources: {
      src: string;
      type: string;
    }[];
    html5?: {
      vhs?: {
        enableLowInitialPlaylist?: boolean;
        smoothQualityChange?: boolean;
        overrideNative?: boolean;
      };
    };
  };
}
```

#### Usage
```typescript
<Video 
  options={{
    autoplay: false,
    controls: true,
    sources: [{
      src: 'https://example.com/video.m3u8',
      type: 'application/x-mpegURL'
    }]
  }}
/>
```

### BitRate Selector Component
**Location**: `src/components/BitRateSelector/BitRateSelector.tsx`

Component for managing and selecting video quality levels.

#### Features
- Manual quality selection
- Auto-quality mode toggle
- Current bitrate display
- Available quality levels list

### Metrics Control Component
**Location**: `src/components/Metrics/MetricsControl.tsx`

Displays real-time video playback metrics and analytics.

#### Metrics Displayed
- Buffer length
- Playback bitrate
- Download speed
- Latency
- Frame rate
- Dropped frames

### Token Generator Component
**Location**: `src/components/TokenGenerator/TokenGenerator.tsx`

Handles authentication token generation and management.

#### Features
- Token generation
- Token validation
- Token expiry management
- Authentication status display

## Services

### NPAW Plugin Service
**Location**: `src/services/npaw/plugins/NpawPluginService.ts`

Singleton service managing NPAW plugin integration.

#### Methods
```typescript
class NpawPluginService {
  static getInstance(): NpawPluginService;
  registerPlayer(player: any): void;
  initializePlugin(): void;
  setCustomDimension(key: string, value: string): void;
}
```

### Video Quality Service
**Location**: `src/services/VideoQualityService.ts`

Manages video quality settings and bitrate adaptation.

#### Methods
```typescript
interface VideoQualityService {
  setQualityLevel(level: number): void;
  enableAutoQuality(): void;
  disableAutoQuality(): void;
  getCurrentQuality(): QualityLevel;
  getAvailableQualities(): QualityLevel[];
}

interface QualityLevel {
  index: number;
  bitrate: number;
  height: number;
  width: number;
  label: string;
}
```

## Models

### Metrics Model
**Location**: `src/models/metrics.ts`

```typescript
interface Metrics {
  bufferLength: number;
  bitrate: number;
  downloadSpeed: number;
  latency: number;
  frameRate: number;
  droppedFrames: number;
  timestamp: number;
}
```

### Configuration Model
**Location**: `src/models/config.ts`

```typescript
interface NpawConfig {
  accountCode: string;
  userId: string;
  username?: string;
  userType?: string;
  sessionExpiry?: number;
}
```

## Events

### Video Player Events
The video player emits various events that can be listened to:

```typescript
// Player ready event
player.on('ready', () => {
  // Handle player ready
});

// Quality level change event
player.on('qualityLevelChanged', (event) => {
  const { bitrate, height, width } = event.qualityLevel;
});

// Error events
player.on('error', (error) => {
  // Handle error
});

// Playback events
player.on('play', () => {});
player.on('pause', () => {});
player.on('ended', () => {});
```

### NPAW Plugin Events
Events emitted by the NPAW plugin:

```typescript
// Plugin initialization
npawPlugin.on('init', () => {
  // Handle plugin initialization
});

// Metrics update
npawPlugin.on('metricsUpdate', (metrics: Metrics) => {
  // Handle metrics update
});

// Error events
npawPlugin.on('error', (error) => {
  // Handle plugin error
});
```

## Configuration

### Environment Variables
Required environment variables for the application:

```env
VITE_NPAW_ACCOUNT_CODE=your_account_code
VITE_NPAW_USER_ID=your_user_id
```

### VideoJS Configuration
Default VideoJS configuration options:

```typescript
const defaultVideoJsOptions = {
  autoplay: false,
  controls: true,
  responsive: true,
  fluid: true,
  playbackRates: [0.5, 1, 1.5, 2],
  html5: {
    vhs: {
      enableLowInitialPlaylist: true,
      smoothQualityChange: true,
      overrideNative: true
    }
  }
};
```

## Error Handling

### Video Player Errors
Common error scenarios and handling:

```typescript
player.on('error', (error) => {
  switch (error.code) {
    case 1:
      // MEDIA_ERR_ABORTED
      break;
    case 2:
      // MEDIA_ERR_NETWORK
      break;
    case 3:
      // MEDIA_ERR_DECODE
      break;
    case 4:
      // MEDIA_ERR_SRC_NOT_SUPPORTED
      break;
    default:
      // Unknown error
      break;
  }
});
```

### NPAW Plugin Errors
Error handling for NPAW plugin:

```typescript
npawPlugin.on('error', (error) => {
  switch (error.type) {
    case 'initialization':
      // Handle initialization errors
      break;
    case 'configuration':
      // Handle configuration errors
      break;
    case 'metrics':
      // Handle metrics collection errors
      break;
    default:
      // Handle unknown errors
      break;
  }
});
```

## Best Practices

### Performance Optimization
- Use `React.memo()` for components that receive stable props
- Implement proper cleanup in `useEffect` hooks
- Use lazy loading for components when appropriate
- Optimize video quality selection logic

### Security
- Validate all user inputs
- Implement proper token validation
- Use secure connections for video streams
- Handle API keys and sensitive data securely

### Accessibility
- Implement proper ARIA labels
- Ensure keyboard navigation
- Provide captions and subtitles support
- Follow WCAG guidelines

## Testing

### Component Testing
Example of component test:

```typescript
describe('Video Component', () => {
  it('should initialize with correct options', () => {
    // Test implementation
  });

  it('should handle quality level changes', () => {
    // Test implementation
  });

  it('should cleanup on unmount', () => {
    // Test implementation
  });
});
```

### Service Testing
Example of service test:

```typescript
describe('NPAW Plugin Service', () => {
  it('should initialize singleton instance', () => {
    // Test implementation
  });

  it('should register player successfully', () => {
    // Test implementation
  });

  it('should handle initialization errors', () => {
    // Test implementation
  });
});
``` 