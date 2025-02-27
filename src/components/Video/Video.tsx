import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/http-streaming';
import 'videojs-contrib-quality-levels';
import './Video.css';
import NpawPluginService from '@services/npaw/plugins/NpawPluginService';

/**
 * Type augmentation for VideoJS Player interface
 */
declare module 'video.js' {
  interface Player {
    /** Method to access quality levels of the video */
    qualityLevels(): void;
  }
}

/**
 * Props for the Video component
 */
interface VideoProps {
  /** 
   * VideoJS player configuration options.
   * This includes settings for sources, controls, autoplay, etc.
   * @see https://docs.videojs.com/tutorial-options.html
   */
  options:  any;
}

/**
 * Video player component that integrates VideoJS with NPAW plugin.
 * Handles player initialization, cleanup, and NPAW integration.
 * Supports HLS streaming and quality level selection.
 * 
 * @returns A div containing the video player element
 */
const Video = ({ options }: VideoProps) => {
  /** Reference to the video container element */
  const videoRef = useRef<HTMLDivElement | null>(null);
  /** Reference to the VideoJS player instance */
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current) {
      if (!videoRef.current) return;

      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = videojs(videoElement, {
        ...options,
        html5: {
          hls: {
            overrideNative: true,
            enableLowInitialPlaylist: true,
          },
        },
      }, () => {
        // Register the player with the NPAW plugin service
        NpawPluginService.getInstance().registerPlayer(playerRef.current);

        player.on('error', (error: any) => {
          console.error('Video player error:', error);
        });
      });

      playerRef.current = player;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export { Video }; 