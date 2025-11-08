# GitHub Actions Workflows

This project uses GitHub Actions for continuous integration, quality checks, and automated deployments.

## Workflow Overview

### 1. **Build and Test** (`build.yml`)
**Triggers:** Every push and pull request on all branches

**Purpose:** Ensures code builds successfully and passes basic tests

**Jobs:**
- `lint` - Runs ESLint to check code quality
- `build` - Builds the application and uploads artifacts
- `test-build` - Tests the production build to ensure it works

**Status:** ✅ Required for all PRs

---

### 2. **Code Quality** (`quality.yml`)
**Triggers:** Every push and pull request on all branches

**Purpose:** Analyzes code quality and reports issues

**Jobs:**
- `quality-check` - Runs comprehensive quality analysis
  - ESLint report generation
  - Console statement detection
  - Large file detection
  - Build size analysis

**Status:** ✅ Required for all PRs

---

### 3. **Dependency Updates** (`dependencies.yml`)
**Triggers:** 
- Scheduled: Every Monday at 9:00 AM UTC
- Manual: `workflow_dispatch`

**Purpose:** Monitors and reports dependency health

**Jobs:**
- `dependency-review` - Checks for outdated packages and security vulnerabilities
  - Lists outdated packages
  - Runs security audit
  - Creates summary report

**Status:** ℹ️ Informational only

---

### 4. **Release and Deploy** (`release.yml`)
**Triggers:**
- Push to `main` branch
- Version tags (e.g., `v1.0.0`)
- GitHub releases (published/created)
- Manual: `workflow_dispatch`

**Purpose:** Handles production releases and deployments

**Jobs:**
1. `release-checks` - Pre-release validation
   - Runs linter
   - Builds project
   - Verifies build output

2. `create-release-artifact` - Creates release package
   - Builds production version
   - Creates compressed archive
   - Uploads artifact (90-day retention)
   - Generates build information

3. `deploy-production` - Deploys to production
   - Only runs on `main` branch pushes
   - Uses GitHub environment protection
   - Supports multiple deployment targets (see configuration below)

4. `notify-deployment` - Sends deployment notifications
   - Reports deployment status
   - Optional team notifications (Discord, Slack, etc.)

**Status:** ⚠️ Only runs on `main` branch or releases

---

## Workflow Configuration

### Branch Protection Rules

It's recommended to configure branch protection for `main`:

1. Go to **Settings** → **Branches** → **Add rule**
2. Branch name pattern: `main`
3. Enable:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - Required checks:
     - `Lint Code`
     - `Build Application`
     - `Test Production Build`
     - `Code Quality Analysis`
   - ✅ Require linear history
   - ✅ Include administrators

### Environment Setup for Deployments

To enable production deployments, configure your environment:

1. Go to **Settings** → **Environments** → **New environment**
2. Name: `production`
3. Configure protection rules:
   - ✅ Required reviewers (recommended)
   - ✅ Wait timer (optional)
   - Add environment secrets (see below)

### Deployment Secrets

Depending on your deployment target, add these secrets:

#### Cloudflare Pages
```
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

#### Vercel
```
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

#### Netlify
```
NETLIFY_AUTH_TOKEN
NETLIFY_SITE_ID
```

#### AWS S3 + CloudFront
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
S3_BUCKET
CLOUDFRONT_DISTRIBUTION_ID
```

#### Notifications (Optional)
```
DISCORD_WEBHOOK  # For Discord notifications
SLACK_WEBHOOK    # For Slack notifications
```

---

## Usage Examples

### Regular Development Workflow

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Push commits:**
   ```bash
   git push origin feature/new-feature
   ```
   - ✅ `Build and Test` workflow runs
   - ✅ `Code Quality` workflow runs

3. **Create Pull Request:**
   - All checks must pass before merge
   - Review required status checks in PR

4. **Merge to main:**
   - Triggers `Release and Deploy` workflow
   - Deploys to production (if configured)

### Creating a Release

#### Option 1: Using GitHub UI
1. Go to **Releases** → **Create a new release**
2. Choose or create a tag (e.g., `v1.0.0`)
3. Fill in release notes
4. Click **Publish release**
5. `Release and Deploy` workflow triggers automatically

#### Option 2: Using Git Tags
```bash
# Create and push a version tag
git tag v1.0.0
git push origin v1.0.0
```
- Triggers `Release and Deploy` workflow
- Creates release artifact

#### Option 3: Manual Deployment
1. Go to **Actions** → **Release and Deploy**
2. Click **Run workflow**
3. Select branch (`main`)
4. Click **Run workflow**

---

## Workflow Status Badges

Add these badges to your README.md:

```markdown
[![Build and Test](https://github.com/Tricksfor-Organization/Landing/actions/workflows/build.yml/badge.svg)](https://github.com/Tricksfor-Organization/Landing/actions/workflows/build.yml)
[![Code Quality](https://github.com/Tricksfor-Organization/Landing/actions/workflows/quality.yml/badge.svg)](https://github.com/Tricksfor-Organization/Landing/actions/workflows/quality.yml)
[![Release and Deploy](https://github.com/Tricksfor-Organization/Landing/actions/workflows/release.yml/badge.svg)](https://github.com/Tricksfor-Organization/Landing/actions/workflows/release.yml)
```

---

## Troubleshooting

### Build Failures

**Problem:** Build fails on CI but works locally

**Solutions:**
- Ensure all dependencies are in `package.json`
- Check Node.js version matches (18.x)
- Clear cache: Re-run workflow with "Re-run jobs"
- Check for environment-specific code

### Deployment Failures

**Problem:** Release workflow doesn't trigger

**Check:**
- Branch is `main`
- Tag format is correct (`v*.*.*`)
- Workflow file is in `.github/workflows/`

**Problem:** Deployment step fails

**Check:**
- All required secrets are configured
- Environment protection rules are met
- Deployment configuration is uncommented and correct

### Quality Check Warnings

**Problem:** Console statements detected

**Solution:**
```bash
# Find console statements
grep -r "console\." src/

# Remove them or wrap in development check
if (import.meta.env.DEV) {
  console.log('Development only');
}
```

---

## Maintenance

### Updating Workflows

1. Edit workflow files in `.github/workflows/`
2. Test changes on feature branch first
3. Create PR with workflow changes
4. Verify all checks pass
5. Merge to main

### Monitoring

- Check **Actions** tab regularly for failures
- Review dependency audit reports weekly
- Update outdated packages monthly
- Monitor deployment success rate

---

## Best Practices

1. **Always run locally first:**
   ```bash
   npm run lint
   npm run build
   ```

2. **Test production build:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Keep dependencies updated:**
   - Review dependency update PRs
   - Test thoroughly before merging

4. **Use semantic versioning:**
   - `v1.0.0` - Major release
   - `v1.1.0` - Minor features
   - `v1.0.1` - Patches/fixes

5. **Write descriptive commit messages:**
   ```
   feat: add mobile menu fixes
   fix: resolve z-index issues
   docs: update workflow documentation
   ```

---

## Support

For issues with workflows:
1. Check workflow logs in Actions tab
2. Review this documentation
3. Contact the DevOps team
4. Create an issue with workflow logs

---

**Last Updated:** November 8, 2025
