# [LIVE SITE](https://3dws.netlify.app/)
This is the updated version of my personal website which is now in 3D. LFG!



> Note: this repository is also used as a template. If you want to deploy your own custom domain, set `GH_PAGES_CUSTOM_DOMAIN` in the workflow and the build will generate `public/CNAME` automatically. Use `NEXT_PUBLIC_GA_ID` to enable Google Analytics tracking. Otherwise, leave the custom domain env unset and the repo will continue to work as a GitHub Pages site.

## Tech Stack

- Next.js
- React
- React-three-fiber
- DREI
- GSAP
- Zustand
- Tailwind

## Deploying on Render (Static Site)

Since this app is configured for static export (`output: 'export'`), it can be hosted on Render as a **Static Site** for free.

To host it:

1. **Create a New Static Site** on Render:
   - Connect your GitHub repository (`3dWS`).

2. **Configure Settings**:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `out`

3. **Deploy**:
   - Render will build the app, export the static files to the `out/` directory, and deploy them.

## Local Execution

To run the application locally:
```bash
npm install
npm run build
npm run start
```


