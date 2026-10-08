# CreatorX — AI Creator Marketplace

High-level hackathon MVP for an AI-powered creator marketplace.

## Run in VS Code

### Option 1 — easiest
Open this folder in VS Code and open `index.html` in your browser.

### Option 2 — recommended
Install the VS Code **Live Server** extension, then:
1. Right-click `index.html`
2. Select **Open with Live Server**

No Python, npm or API key is required for this demo version.

## Project structure

- `index.html` — complete website structure
- `style.css` — premium responsive UI
- `script.js` — marketplace search, filters, AI demo, modals and interactions

## Next hackathon upgrades

1. Connect Supabase/Firebase for real users and creators.
2. Add real authentication.
3. Connect a permitted AI API for real AI generation.
4. Add creator onboarding and dashboard.
5. Add real booking/payment flow if allowed by the hackathon.
6. Push this folder to GitHub and deploy on Netlify.

## GitHub

```bash
git init
git add .
git commit -m "Initial CreatorX hackathon MVP"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Netlify

Import the GitHub repository into Netlify.

Build command: leave empty.

Publish directory: `/`

Because this is a static frontend, Netlify can deploy it directly.
