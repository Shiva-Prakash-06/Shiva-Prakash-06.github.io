# GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- This portfolio project ready

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right and select **New repository**
3. Name your repository (e.g., `my-portfolio` or `portfolio`)
4. Make it **Public** (required for free GitHub Pages)
5. **Do not** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### 2. Initialize Git (if not already done)

```bash
cd /Users/Shiva_1/Desktop/my-portfolio
git init
git add .
git commit -m "Initial commit: Complete portfolio website"
```

### 3. Connect to GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Update Vite Configuration

Edit `vite.config.js` and add the base path (use your repository name):

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',  // ⚠️ Replace with your repository name
})
```

**Example:** If your repo is `my-portfolio`, use:
```javascript
base: '/my-portfolio/',
```

**Note:** If you're using a custom domain or GitHub username site (username.github.io), use:
```javascript
base: '/',
```

### 5. Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

### 6. Commit the Changes

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push
```

### 7. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your project (`npm run build`)
- Create a `gh-pages` branch
- Push the built files to that branch

### 8. Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### 9. Wait and Access Your Site

- GitHub will take 1-2 minutes to deploy
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- You'll see a green checkmark when it's ready

## Custom Domain (Optional)

If you want to use a custom domain:

1. Create a file named `CNAME` in the `public` folder
2. Add your domain name (e.g., `yourname.com`)
3. Configure your domain's DNS settings to point to GitHub Pages
4. Redeploy: `npm run deploy`

## Updating Your Portfolio

Whenever you make changes:

```bash
# Make your changes to the code
git add .
git commit -m "Update portfolio content"
git push

# Deploy the updates
npm run deploy
```

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Make sure you've set the correct `base` path in `vite.config.js`

### Issue: CSS/Assets not loading
**Solution:** Check that all asset paths are relative and the `base` path is correct

### Issue: 404 errors
**Solution:** For React Router, you may need to use hash routing or configure redirects

### Issue: Build fails
**Solution:** Run `npm run build` locally to see the error, fix it, then try deploying again

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production (test locally)
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Check Git status
git status

# View deployment history
git log --oneline
```

## Additional Tips

1. **Test locally first**: Always run `npm run build` and `npm run preview` before deploying
2. **Commit regularly**: Make small, frequent commits with clear messages
3. **Use branches**: Create feature branches for major changes
4. **Check the Actions tab**: On GitHub, check the Actions tab to see deployment progress
5. **Cache issues**: If you see old content, clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- Check the [Issues](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues) tab on your repository

---

**Ready to deploy? Follow the steps above and your portfolio will be live in minutes!** 🚀
