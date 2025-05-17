# Vercel Deployment Instructions

This document provides instructions for deploying your portfolio site to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com if you don't have one)
2. Node.js installed on your local machine
3. Git installed on your local machine (optional, but recommended)

## Deployment Steps

### Option 1: Direct Deployment from GitHub

1. Push your code to a GitHub repository
2. Log in to your Vercel account
3. Click "Add New" > "Project"
4. Select your GitHub repository
5. Vercel will automatically detect the React project
6. Configure your project settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. Click "Deploy"

### Option 2: Manual Deployment

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Navigate to your project directory and run:
   ```
   vercel login
   vercel
   ```

3. Follow the prompts to deploy your project

### Option 3: Drag and Drop Deployment

1. Run `npm run build` locally to generate the `dist` folder
2. Go to https://vercel.com/dashboard
3. Drag and drop the `dist` folder onto the Vercel dashboard
4. Follow the prompts to complete deployment

## Important Files for Vercel

- `vercel.json`: Contains configuration for routing and other Vercel-specific settings
- `package.json`: Contains dependencies and build scripts
- `vite.config.ts`: Contains Vite configuration
- `public/`: Contains static assets
- `src/`: Contains your source code

## Troubleshooting

- If you encounter routing issues, ensure your `vercel.json` file is correctly configured
- For build errors, check your dependencies and build scripts in `package.json`
- For more help, refer to Vercel's documentation: https://vercel.com/docs
