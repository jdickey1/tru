#!/bin/bash
set -e

# Texas Republicans United - Deploy Script
# Usage: ./deploy.sh [prod|dev]

ENV="${1:-prod}"
APP_DIR="/home/tru/apps/web"
BACKUP_DIR="/home/tru/backups/builds"

cd "$APP_DIR"

echo "=== Deploying Texas Republicans United ($ENV) ==="
echo "Started at: $(date)"

# Create backup directory if needed
mkdir -p "$BACKUP_DIR"

# Backup current build
if [ -d ".next" ]; then
    BACKUP_NAME="build_$(date +%Y%m%d_%H%M%S)"
    echo "Backing up current build to $BACKUP_DIR/$BACKUP_NAME..."
    cp -r .next "$BACKUP_DIR/$BACKUP_NAME"
    
    # Keep only last 5 backups
    ls -dt "$BACKUP_DIR"/build_* 2>/dev/null | tail -n +6 | xargs rm -rf 2>/dev/null || true
fi

# Install dependencies if needed
if [ ! -d "node_modules" ] || [ "package.json" -nt "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build
echo "Building application..."
npm run build

# Copy static files to standalone
echo "Copying static files..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# Restart PM2
if [ "$ENV" = "prod" ]; then
    echo "Restarting PM2 process..."
    pm2 restart tru-prod --update-env
    pm2 save
fi

echo "=== Deploy complete ==="
echo "Finished at: $(date)"
