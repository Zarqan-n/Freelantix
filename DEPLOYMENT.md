# Deployment Guide

This is a full-stack React + Express.js application that can be deployed to various platforms.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. The application will be available at `http://localhost:5000`

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Deployment Options

### Option 1: Netlify (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Netlify
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Functions directory: `netlify/functions`
4. Set environment variables (if using database):
   - `DATABASE_URL`: Your PostgreSQL database URL
5. Deploy!

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Option 3: Railway

1. Connect your Git repository to Railway
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Add environment variables as needed

### Option 4: Render

1. Create a new Web Service on Render
2. Connect your Git repository
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Add environment variables as needed

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration (for production)
DATABASE_URL=postgresql://username:password@host:port/database

# Node Environment
NODE_ENV=production

# Optional: For development on Replit
REPL_ID=
```

## Features

- ✅ Full-stack React + Express.js application
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ Contact form with validation
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Serverless functions support (Netlify)
- ✅ Static site generation ready

## File Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Express.js backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage
├── shared/                # Shared types and schemas
├── netlify/               # Netlify functions
└── dist/                  # Build output
```

## Troubleshooting

1. **Build fails**: Make sure all dependencies are installed with `npm install`
2. **TypeScript errors**: Run `npm run check` to see specific errors
3. **Port issues**: The app is configured to run on port 5000
4. **Database errors**: Ensure DATABASE_URL is set correctly for production

## Support

For issues or questions, please check the project documentation or create an issue in the repository. 