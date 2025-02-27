import NpawPlugin from 'npaw-plugin';
import { BehaviorSubject } from 'rxjs';
import { NpawConfig } from '@/Config/NpawConfig';

/**
 * Enum representing the available adapter types for the NPAW plugin
 */
export enum AdapterType {
  /** Custom VideoJS adapter with Mbps units */
  VIDEOJS_CUSTOM = './adapter/videojs/7.0.3-videojs-js-custom.json',
  /** Standard VideoJS adapter with bps units */
  VIDEOJS = './adapter/videojs/7.0.3-videojs-js.json'
}

/**
 * Interface for adapter configuration
 */
interface AdapterConfig {
  /** Path to the adapter configuration file */
  path: AdapterType;
  /** Reference to the player instance */
  player: any | null;
}

/**
 * Service for managing the NPAW plugin integration.
 * Handles player registration, bitrate monitoring, and adapter configuration.
 * Implements the Singleton pattern to ensure a single instance across the application.
 */
class NpawPluginService {
  /** The singleton instance of the service */
  private static instance: NpawPluginService;
  /** Instance of the NPAW plugin */
  private npawPlugin: any;
  /** Subject for broadcasting bitrate changes */
  private bitrateSubject: BehaviorSubject<number>;
  /** Subject for broadcasting adapter configuration changes */
  private adapterConfigSubject: BehaviorSubject<AdapterConfig>;
  
  /**
   * Private constructor to prevent direct instantiation.
   * Initializes the NPAW plugin and sets up required subscriptions.
   */
  private constructor() {
    this.npawPlugin = new NpawPlugin(NpawConfig.ACCOUNT_CODE);
    this.bitrateSubject = new BehaviorSubject<number>(0);
    this.adapterConfigSubject = new BehaviorSubject<AdapterConfig>({
      path: AdapterType.VIDEOJS,
      player: null
    });
    this.setupListeners();
    this.setupAdapterConfig();
  }

  /**
   * Gets the singleton instance of the service.
   * Creates a new instance if one doesn't exist.
   * 
   * @returns The singleton instance of NpawPluginService
   */
  public static getInstance(): NpawPluginService {
    if (!NpawPluginService.instance) {
      NpawPluginService.instance = new NpawPluginService();
    }
    return NpawPluginService.instance;
  }

  /**
   * Sets up listeners for NPAW plugin events.
   * Monitors video analytics events and updates bitrate information.
   * 
   * @private
   */
  private setupListeners() {
    this.npawPlugin.videoAnalytics.addOnWillSendRequestListener((serviceName: string, _videoKey: string, params: any) => {
      console.info('serviceName', serviceName);
      console.info(params);
      switch (serviceName) {
        case '/joinTime':
        case '/ping':
          console.info('ping', params);
          this.bitrateSubject.next(params.bitrate);
          break;
      }
    });
  }

  /**
   * Sets up the adapter configuration subscription.
   * Registers the player with the NPAW plugin when configuration changes.
   * 
   * @private
   */
  private setupAdapterConfig() {
    this.adapterConfigSubject.subscribe(config => {
      if (config.player) {
        this.npawPlugin.registerAdapter(config.player, config.path);
      }
    });
  }

  /**
   * Gets an observable stream of bitrate changes.
   * 
   * @returns An observable that emits bitrate values in real-time
   */
  public getBitrateStream() {
    return this.bitrateSubject.asObservable();
  }

  /**
   * Gets the current bitrate value.
   * 
   * @returns The current bitrate value in the specified unit (bps or Mbps)
   */
  public getCurrentBitrate() {
    return this.bitrateSubject.getValue();
  }

  /**
   * Sets a new bitrate value.
   * 
   * @param value - The new bitrate value to set
   */
  public setBitrate(value: number) {
    this.bitrateSubject.next(value);
  }

  /**
   * Gets an observable stream of adapter configuration changes.
   * 
   * @returns An observable that emits adapter configuration updates
   */
  public getAdapterConfigStream() {
    return this.adapterConfigSubject.asObservable();
  }

  /**
   * Gets the current adapter configuration.
   * 
   * @returns The current adapter configuration object
   */
  public getCurrentAdapterConfig() {
    return this.adapterConfigSubject.getValue();
  }

  /**
   * Updates the adapter configuration with a new path.
   * Maintains the current player reference while updating the adapter path.
   * 
   * @param path - The new adapter path to use
   */
  public updateAdapterConfig(path: AdapterType) {
    const currentConfig = this.adapterConfigSubject.getValue();
    this.adapterConfigSubject.next({
      ...currentConfig,
      path
    });
  }

  /**
   * Registers a player instance with the NPAW plugin.
   * Updates the adapter configuration with the new player instance.
   * 
   * @param player - The video player instance to register
   */
  public registerPlayer(player: any) {
    if (player) {
      const currentConfig = this.adapterConfigSubject.getValue();
      this.adapterConfigSubject.next({
        ...currentConfig,
        player
      });
    }
  }
}

export default NpawPluginService; 