# Travelora

A travel and tourism website for discovering destinations, browsing tours, and getting in touch. Built with React, Vite, Tailwind CSS, and React Router.

## Features

- **Home** — Hero, featured destinations, highlights, gallery preview, banner, and contact form
- **About** — Company story and service highlights
- **Tours** — Tour listings
- **Gallery** — Photo gallery
- **Contact** — Contact page

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4
- [React Router](https://reactrouter.com/) 7
- [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- [react-slick](https://react-slick.neostack.com/) / [slick-carousel](https://kenwheeler.github.io/slick/) for carousels
- [lightGallery](https://www.lightgalleryjs.com/) for the gallery

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

```
src/
├── Component/     # Shared UI (Header, Hero, Footer, etc.)
├── pages/         # Route pages (Home, About, Tours, Gallery, Contact)
├── assets/        # Images and static assets
├── App.jsx        # Router setup
└── main.jsx       # App entry
```

## Routes

| Path       | Page    |
| ---------- | ------- |
| `/`        | Home    |
| `/about`   | About   |
| `/tours`   | Tours   |
| `/gallery` | Gallery |
| `/contact` | Contact |
