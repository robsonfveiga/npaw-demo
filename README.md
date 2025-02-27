# NPAW Video Player Demo

## Overview
This project is a demonstration of video player integration with NPAW (Nice People At Work) analytics. It showcases a video player implementation using VideoJS with NPAW's plugin for advanced video analytics and monitoring.

## Features
- Video playback with adaptive bitrate streaming (HLS)
- Real-time video quality metrics monitoring
- Bitrate selection controls
- Token-based authentication system
- Interactive metrics visualization
- NPAW plugin integration for analytics

## Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Copy `.env.example` to `.env` and configure your environment variables:
```bash
cp .env.example .env
```

## Environment Variables
- `VITE_NPAW_ACCOUNT_CODE`: Your NPAW account code
- `VITE_NPAW_USER_ID`: NPAW user identifier

## Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build
- `npm run docs`: Generate TypeDoc documentation

## Project Structure
```
src/
├── assets/        # Static assets
├── components/    # React components
│   ├── App/
│   ├── BitRateSelector/
│   ├── Metrics/
│   ├── PanelBar/
│   ├── TokenGenerator/
│   └── Video/
├── Config/        # Configuration files
├── models/        # TypeScript interfaces and types
├── services/      # Business logic and API services
└── styles/        # Global styles and themes
```

## Key Components

### Video Player (`src/components/Video/Video.tsx`)
The main video player component integrating VideoJS with NPAW analytics. Handles video playback and quality management.

### Metrics Control (`src/components/Metrics/MetricsControl.tsx`)
Displays and manages video quality metrics and analytics data from NPAW.

### BitRate Selector (`src/components/BitRateSelector/BitRateSelector.tsx`)
Allows manual control of video quality and bitrate selection.

### Token Generator (`src/components/TokenGenerator/TokenGenerator.tsx`)
Manages authentication tokens for secure video playback.

## Configuration
The application can be configured through various files:
- `.env`: Environment variables
- `vite.config.ts`: Vite bundler configuration
- `tsconfig.json`: TypeScript configuration
- `eslint.config.js`: ESLint rules and settings

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules for consistent code style
- Write JSDoc comments for components and functions
- Use functional components with hooks

### Best Practices
- Implement error boundaries for component error handling
- Use proper TypeScript types and interfaces
- Follow React best practices for component composition
- Implement proper cleanup in useEffect hooks

### Testing
- Write unit tests for components and services
- Test error handling and edge cases
- Verify NPAW integration functionality

## Production Deployment
1. Build the application:
```bash
npm run build
```
2. Preview the build:
```bash
npm run preview
```
3. Deploy the contents of the `dist` directory to your hosting service

## Troubleshooting
Common issues and solutions:
- **Video playback issues**: Verify HLS stream availability and network connectivity
- **NPAW integration errors**: Check account credentials in environment variables
- **Build failures**: Ensure all dependencies are installed and TypeScript types are correct

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
