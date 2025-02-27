import React, { useState } from 'react';
import './TokenGenerator.css';
import { NpawApiService } from '@services/npaw/api/NpawService';
import { ApiEndpoints, ApiUrlParams } from '@models/index';
import { AudienceMetrics } from '@models/metrics/audience';
/**
 * Props for the TokenGenerator component
 */
interface TokenGeneratorProps {
    /** Display variant of the token generator */
    variant?: 'standalone' | 'panel';
}

/**
 * Component that generates authentication tokens for the NPAW API.
 * Provides functionality to generate tokens and open the authenticated URL in a new window.
 * 
 * @returns The rendered TokenGenerator component
 */
const TokenGenerator: React.FC<TokenGeneratorProps> = () => {
    /** The generated authentication token */
    const [token, setToken] = useState<string>('');
    /** The complete authenticated URL */
    const [url, setUrl] = useState<string>('');
    /** Whether a token is currently being generated */
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    /** Instance of the NPAW API service */
    const npawApiService = new NpawApiService(ApiEndpoints.Metrics);

    /**
     * Generates a new authentication token and URL
     * Sets the token and URL states and handles any errors
     */
    const generateToken = async () => {
        setIsGenerating(true);
        
        const params: ApiUrlParams = {
            fromDate: 'last6hours',
            metrics: [AudienceMetrics.Views, AudienceMetrics.SuccessfulPlays, AudienceMetrics.Hours, AudienceMetrics.Stops, AudienceMetrics.Subscribers, AudienceMetrics.Traffic, AudienceMetrics.Uniques, AudienceMetrics.HappyPlays]
        }
        try {
            const generatedUrl = await npawApiService.createAuthenticatedUrl(params)
            setUrl(generatedUrl);
            setToken(generatedUrl.split('token=')[1]);
        } catch (error) {
            console.error('Error generating token:', error);
            setToken('Error generating token');
        } finally {
            setTimeout(() => setIsGenerating(false), 600);
        }
    };

    /**
     * Opens the authenticated URL in a new browser window
     */
    const openInNewWindow = () => {
        window.open(url, '_blank');
    };

    return (
        <div className={`token-container`}>
            <div className="token-display">
                <div className="token-label">
                    Generated Token
                </div>
                <div className={`token-value ${isGenerating ? 'generating' : ''}`}>
                    {token || 'Click Generate to create token'}
                </div>
            </div>
            <div className="token-controls">
                <button onClick={generateToken} className="generate-button">
                    Generate Token
                </button>
                {token && (
                    <button 
                        onClick={openInNewWindow} 
                        className="open-button"
                        title="Open URL in new window"
                    >
                        Open
                    </button>
                )}
            </div>
        </div>
    );
};

export { TokenGenerator }; 