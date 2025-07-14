# GitHub Pages Deployment Guide

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub: https://github.com/MindStimulated/eliteluxx-window-cleaning-services
   - Navigate to `Settings` → `Pages`
   - Under "Source", select `GitHub Actions`
   - Click `Save`

2. **Automatic Deployment:**
   - The site will automatically deploy when you push to the `main` branch
   - You can also manually trigger deployment from the Actions tab

3. **Site URL:**
   After deployment, your site will be available at:
   `https://mindstimulated.github.io/eliteluxx-window-cleaning-services/`

## Manual Build (Optional)

If you want to build locally:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Configuration

- **Base URL:** `/eliteluxx-window-cleaning-services/` (configured in `vite.config.ts`)
- **Build Output:** `dist/` directory
- **Node Version:** 20 (specified in GitHub Actions workflow)

## Troubleshooting

- If deployment fails, check the Actions tab for error logs
- Ensure the repository has Pages enabled in Settings
- Make sure all dependencies are properly listed in `package.json`
