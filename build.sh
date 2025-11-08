#!/bin/bash
# Cloudflare Pages build script

echo "🚀 Starting TricksFor Landing Page build..."

# Install dependencies with clean install
echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit --legacy-peer-deps || npm install --legacy-peer-deps

# Build the project
echo "🔨 Building production bundle..."
npm run build

# Verify build output
if [ -d "dist" ]; then
  echo "✅ Build completed successfully!"
  echo "📊 Build output:"
  ls -lh dist/
else
  echo "❌ Build failed - dist directory not found"
  exit 1
fi
