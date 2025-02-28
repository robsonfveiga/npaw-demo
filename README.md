# NPAW Video Analytics Integration

A demo React application that integrates NPAW (Nice People At Work) analytics for video player monitoring and analytics. This project provides a seamless integration between video.js player and NPAW's analytics platform.

## 🎯 Core Features

### NPAW Plugin Service
The heart of this application is the `NpawPluginService`, a sophisticated singleton service that manages the integration between Video.js player and NPAW analytics platform. Key features include:

- **Real-time Bitrate Monitoring**: Tracks and broadcasts video bitrate changes in real-time
- **Flexible Adapter System**: Supports multiple adapter types (VideoJS with Mbps or bps units)
- **Reactive Architecture**: Uses RxJS BehaviorSubjects for reactive state management
- **Event Monitoring**: Captures and processes video analytics events like join time and ping
- **Player Registration**: Seamless registration and configuration of video player instances
- **Type Safety**: Full TypeScript implementation with proper interfaces and type definitions

The service implements the Singleton pattern to ensure consistent state management across the application, making it ideal for monitoring and analyzing video playback performance.

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- NPAW account and credentials

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/robsonfveiga/npaw-demo.git
   cd npaw
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your NPAW credentials and configuration.

## 🚦 Getting Started

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Preview production build:
   ```bash
   npm run preview
   ```

4. Generate documentation:
   ```bash
   npm run docs
   ```

## 🏗️ Project Structure

```
src/
├── assets/      # Static assets and resources
├── components/  # React components
├── Config/      # Configuration files
├── models/      # TypeScript interfaces and types
├── services/    # API and business logic
└── styles/      # CSS and styling files
```

## 📚 Documentation

API documentation is automatically generated using TypeDoc. After running `npm run docs`, you can find the documentation in the `docs` directory.

## 🔧 Configuration

The application can be configured through environment variables:
- `VITE_NPAW_ACCOUNT`: Your NPAW account ID
- `VITE_NPAW_USERNAME`: NPAW username
- Additional configuration can be found in `.env.example`

## 🔗 Links

- [NPAW](https://npaw.com/) for the analytics platform
- [Video.js](https://videojs.com/) for the video player framework

---

