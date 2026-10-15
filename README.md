# TurfNation Frontend

TurfNation is a responsive sports turf discovery, booking, and management web application. This repository contains the client-side single-page application built with React, TypeScript, Vite, and Tailwind CSS.

---

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6 (SWC plugin)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Routing**: React Router DOM

---

## Features

- **Player Experience**: Turf search by sport and city, interactive time-slot booking with dynamic pricing, booking confirmation, downloadable QR code entry pass, weather forecasts, tournaments, and loyalty rewards.
- **Turf Owner Portal**: Dashboard tracking revenue and daily bookings, turf listing and court management, and announcement broadcasts.
- **Admin Analytics**: High-level platform metrics covering revenue trends, active players, and partner venues.

---

## Project Structure

```text
src/
├── assets/         # Static images and icons
├── components/     # UI and layout components (Navbar, Footers, TurfCard, ui/ primitives)
├── context/        # AuthContext and BookingContext providers
├── data/           # Mock data for turfs, slots, and tournaments
└── pages/          # Application views (Search, Booking, Dashboards, Analytics)
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

### Installation & Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   The application runs locally at `http://localhost:3000`.

3. Create a production build:
   ```bash
   npm run build
   ```
   Compiled assets are generated in the `build/` directory.

---

## License

This project is licensed under the MIT License.
