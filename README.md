# NPAW Video Analytics Integration

A demo React application that integrates **NPAW (Nice People At Work)** analytics for **video player monitoring and analytics**. This project provides a seamless integration between **video.js player** and **NPAW's analytics platform**.

### 📌 Live Demo & Documentation
- [**Application Demo**](https://npaw.vercel.app/)
- [**Application Documentation (TypeDocs)**](https://npaw.vercel.app/docs/index.html)

---

## Case Study

Instead of delivering each component separately, I have developed an application that fulfills all requirements within a unified structure. Below is a brief guide to its **architecture and functionality**.

### Integration

The integration is primarily handled in the `services/npaw/plugins/NpawPluginService.ts` file. This class is responsible for:

- **Registering the player** for monitoring.
- **Configuring the adapter**, as different adapter settings are required for bitrates in **bp** and **Mbps**.
- **Monitoring JoinTime and Ping** to verify if the bitrate has changed successfully.

### API Usage

For API-related functionality, refer to the `services/npaw/api` directory, which contains multiple services:

- **API Connection Service** – Manages the connection to the API.
- **Token Generation Service** – Handles authentication by generating tokens.
- **URL Creation Service** – Constructs request URLs dynamically.

### 📷 Screenshot Request

📌 *Req: 1.2* – Below is the requested screenshot:

![Screenshot](https://npaw.vercel.app/images/Req-1.2.png)

---

## Main Panel

📌 *Req: 1.1* – The **Main Panel** features a **VideoJS player** integrated with **NPAW** for monitoring and analytics.

---

## Side Panel – Advanced Controls

To enhance interactivity and usability, a **Side Panel** with dynamic controls has been designed. Below is an overview of its sections:

### Bitrate
📌 *Req: 1.3 / 1.2*
- Displays the **current bitrate**, retrieved from `/ping` and `/JoinTime`.
- Includes a **button to change the bitrate** dynamically by updating the **adapter configuration**.

### Generate Token
📌 *Req: 2.1*
- Provides a **button to generate a token and URL**, fulfilling requirement **2.1**.

### Metrics Monitor
📌 *Req: 2.2*
- Allows selecting a **metric category** to display real-time server data.
- In the panel, it is also possible to verify the IP, as **all metrics use the user IP** as a **dimension to filter** the data.
- Includes a **countdown timer** indicating when the next request will fetch updated information.

---

## Prerequisites

- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn** package manager
- **NPAW account** and credentials

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/robsonfveiga/npaw-demo.git
   cd npaw
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your **NPAW credentials and configuration**.

---

## Getting Started

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **Preview production build:**
   ```bash
   npm run preview
   ```

4. **Generate documentation:**
   ```bash
   npm run docs
   ```

---

## Project Structure

```
src/
├── assets/      # Static assets and resources
├── components/  # React components
├── config/      # Configuration files
├── models/      # TypeScript interfaces and types
├── services/    # API and business logic
└── styles/      # CSS and styling files
```

---

## Documentation

API documentation is automatically generated using **TypeDoc**. After running `npm run docs`, you can find the documentation in the `docs` directory.

---

## Configuration

The application can be configured through **environment variables**:

- `VITE_NPAW_ACCOUNT`: Your **NPAW account ID**
- `VITE_NPAW_API_KEY`: Your **NPAW API key**
- `VITE_IP_INFO_TOKEN`: **IpInfo token**
- `VITE_VIDEO_SRC`: **Video source URL**
- Additional configuration can be found in `.env.example`

---
## Tecnologies

- [**React**](https://react.dev/) – JavaScript library for building user interfaces
- [**TypeScript**](https://www.typescriptlang.org/) – JavaScript with syntax for types
- [**Vite**](https://vitejs.dev/) – Build tool for modern web development
- [**Video.js**](https://videojs.com/) – Video Player Framework
- [**IpInfo**](https://ipinfo.io/) – User IP Information Capture
- [**NPAW**](https://npaw.com/) – Analytics Platform
- [**TypeDoc**](https://typedoc.org/) - Documentation generator for TypeScript
- [**Vercel**](https://vercel.com/) – Deployment platform

---

