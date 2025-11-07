# Cloudflare Pages Deployment Guide

This guide explains how to deploy the TricksFor landing page to Cloudflare Pages.

## ⚙️ Build Configuration

### In Cloudflare Pages Dashboard:

1. **Framework preset**: `None` or `Vite`

2. **Build command**: 
   ```bash
   npm run build
   ```

3. **Build output directory**: 
   ```
   dist
   ```

4. **Root directory**: 
   ```
   (leave empty - use repository root)
   ```

5. **Environment variables** (optional):
   ```
   NODE_VERSION = 18
   NPM_VERSION = 10
   ```

## 🔧 Build Settings

The project includes the following configuration files for Cloudflare:

### `.npmrc`
- Disables unnecessary npm features during CI/CD
- Speeds up dependency installation
- Reduces build logs

### `public/_redirects`
- Handles client-side routing for React Router
- Redirects all routes to `index.html`
- Required for SPA (Single Page Application) routing

### `wrangler.toml`
- Cloudflare-specific configuration
- Defines the output directory
- Sets compatibility date

## 🚀 Deployment Steps

### Option 1: Connect GitHub Repository (Recommended)

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Click **Create a project**
3. Click **Connect to Git**
4. Select your GitHub account and repository: `Tricksfor-Organization/Landing`
5. Configure build settings:
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

### Option 2: Direct Upload

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

3. Login to Cloudflare:
   ```bash
   wrangler login
   ```

4. Deploy:
   ```bash
   wrangler pages deploy dist --project-name=tricksfor-landing
   ```

## 🔍 Troubleshooting

### Issue: `patch-package: not found`

**Solution**: This error occurs because a dependency tries to run `patch-package` during installation. The `.npmrc` and build configuration handle this automatically.

If the error persists:
1. Make sure `.npmrc` is committed to the repository
2. Use the custom build script: `./build.sh` instead of `npm run build`
3. Or add to package.json devDependencies:
   ```json
   "patch-package": "^8.0.0"
   ```

### Issue: Routes return 404

**Solution**: Make sure `public/_redirects` file exists with:
```
/* /index.html 200
```

### Issue: Build fails with "out of memory"

**Solution**: 
1. Add environment variable in Cloudflare Pages:
   ```
   NODE_OPTIONS = --max-old-space-size=4096
   ```
2. Or optimize images in `src/assets/`

### Issue: Fonts not loading

**Cause**: The build warnings about Poppins fonts are expected.
**Solution**: Fonts are in `public/css/Poppins/` and will be resolved at runtime.

## 📊 Build Performance

Expected build times:
- **First build**: 2-4 minutes (dependency installation)
- **Subsequent builds**: 1-2 minutes (with cache)

Expected bundle size:
- **JavaScript**: ~303 KB (~90 KB gzipped)
- **CSS**: ~34 KB (~7 KB gzipped)
- **Total assets**: ~6 MB (images)

## 🌍 Custom Domain Setup

1. Go to your Cloudflare Pages project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain: `landing.tricksfor.com` or `www.tricksfor.com`
5. Follow the DNS configuration steps

## 🔒 Security Headers (Optional)

Add these headers in Cloudflare Pages settings:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: accelerometer=(), camera=(), geolocation=(), microphone=()
```

## ⚡ Performance Optimization

Cloudflare Pages automatically provides:
- ✅ Global CDN distribution
- ✅ HTTP/3 and Brotli compression
- ✅ Automatic HTTPS
- ✅ Infinite scalability
- ✅ Instant cache invalidation

## 📝 Post-Deployment Checklist

- [ ] Verify homepage loads correctly
- [ ] Test all navigation links
- [ ] Check responsive design on mobile
- [ ] Verify all images load
- [ ] Test all game pages (Dice, Heads or Tails, Rock Paper Scissors)
- [ ] Check Affiliate, FAQ, Roadmap, Transparency pages
- [ ] Verify gradient styles render correctly
- [ ] Test Discord link in footer
- [ ] Check browser console for errors

## 🔄 Continuous Deployment

Once connected to GitHub:
- **Automatic deployments** on push to `main` branch
- **Preview deployments** for pull requests
- **Rollback capability** to previous deployments
- **Build logs** available in dashboard

## 📞 Support

If you encounter issues:
1. Check [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
2. View build logs in Cloudflare Dashboard
3. Contact Cloudflare Support

---

**Happy Deploying! 🚀**
