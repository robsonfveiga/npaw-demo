import { NpawConfig } from '@/Config/NpawConfig';
import './App.css'
import { BitRateSelector } from './BitRateSelector/BitRateSelector';
import { MetricsControl } from './Metrics/MetricsControl';
import { PanelBar } from './PanelBar/PanelBar';
import { TokenGenerator } from './TokenGenerator/TokenGenerator';
import { Video } from './Video/Video'
import background from '@assets/background.jpg';

/**
 * Main application component that serves as the root of the component tree.
 * Renders the video player, bitrate selector, and token generator in a panel layout.
 * 
 * @returns The rendered application component
 */
function App() {
  /**
   * Configuration options for the VideoJS player
   */
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [{
      src: NpawConfig.VIDEO_SOURCE,
      type: 'application/x-mpegURL'
    }],
    html5: {
      vhs: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true
      }
    }
  };


  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="black-box"></div>
      <div className="main-content">
        <h1>Nice People at Work Demo</h1>
        <br/>
        <h2>BIG BUCK BUNNY</h2>
        <div className="video-container">
          <Video options={videoJsOptions} />
        </div>
      </div>
      <PanelBar>
        <BitRateSelector />
        <TokenGenerator />
        <MetricsControl />
      </PanelBar>
    </div>
  )
}

export { App }
