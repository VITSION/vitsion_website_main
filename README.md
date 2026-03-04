# VITSION Movie Makers Website

Welcome to the official repository for the **VITSION Movie Makers** website. VITSION is the official filmmaking and visual storytelling community of VIT Chennai, bringing together passionate students interested in cinema, short films, screenwriting, direction, cinematography, editing, and production.

This repository contains both the frontend application and the backend server for the website.

## 🚀 Tech Stack

### Frontend
- **React 18** & **TypeScript**
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - High-performance complex animations and transitions
- **GSAP** - Scroll-based animations and triggers
- **Lucide React** - Icon library
- **React Router Dom** - Client-side routing

### Backend
- **Node.js** & **Express**
- Complete API routing for events, gallery, and data management

## 📁 Project Structure

```
vitsion_website_main/
├── server/               # Node.js/Express backend server
│   ├── routes/           # API routes (events, etc.)
│   └── index.js          # Backend entry point
├── src/                  # React Frontend source code
│   ├── components/       # Reusable UI components (Nav, Modals, Cards)
│   ├── data/             # Static JSON data (events, films)
│   ├── lib/              # Utilities (e.g., Tailwind's `cn` wrapper)
│   ├── pages/            # Page components (Home, Events, Films, Gallery, etc.)
│   ├── index.css         # Global CSS and Tailwind directives
│   ├── main.tsx          # Application entry point
│   └── App.tsx           # Main application router
├── public/               # Static assets (images, fonts, videos)
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18+)
- npm or bun

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd vitsion_website_main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start both Frontend and Backend Servers:**

   The project is configured to run the Vite dev server and the Node backend.
   
   To start the backend server:
   ```bash
   npm run server
   ```
   
   To start the frontend UI:
   ```bash
   npm run dev
   ```

4. **Visit the application:**
   Open your browser and navigate to `http://localhost:5173`.

## ✨ Key Features
- **Dynamic Animations**: Extensive use of Framer Motion and GSAP for entrance, scroll, and micro-interactions. Performance-optimized CSS animations are used for scrolling/heavy items.
- **Responsive Layout**: Designed mobile-first using Tailwind CSS, ensuring smooth rendering across all screen sizes.
- **Custom Components**: Includes advanced bespoke components such as the `StaggeredMenu`, `FloatingDockNav`, and `Masonry` layouts.
- **Static & Dynamic Data**: Hybrid content management using static JSON arrays for gallery/events and backend API integration.

## 📜 License
All rights reserved © VITSION Movie Makers Club, VIT Chennai.
