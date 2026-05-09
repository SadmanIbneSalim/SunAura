# CutuAura

## Purpose

CutuAura is a modern beauty and lifestyle e-commerce web application where users can browse products, manage their profile, and securely sign in using email or Google authentication.

## Live URL

🔗 [https://sun-aura.vercel.app](https://sun-aura.vercel.app)

## Key Features

- User registration and login with email and password
- Google OAuth sign-in integration
- User profile page with avatar (shows first letter if no image)
- Profile update — change name and profile picture via URL
- Active route highlighting in navbar
- Redirect to previous page after login
- Toast notifications for success and error feedback
- Responsive design for mobile and desktop
- Product listing page with dynamic product detail pages

## npm Packages Used

| Package | Purpose |
|---|---|
| `next` | React framework for server-side rendering and routing |
| `better-auth` | Authentication library for email and social login |
| `react-hot-toast` | Toast notification system |
| `react-icons` | Icon library (Google icon for OAuth button) |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind CSS component library |
| `mongoDB` | MongoDB object modeling |
| `animate.css` | To make the app look alive |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env` file in the root directory:

```
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
AUTH_DB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```
