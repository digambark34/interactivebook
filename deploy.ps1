# Quick Deploy Script
# Run this to commit and push to GitHub for Netlify deployment

Write-Host "🚀 Interactive City Books - Deploy Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if in git repo
if (-not (Test-Path .git)) {
    Write-Host "❌ Error: Not in a git repository!" -ForegroundColor Red
    Write-Host "Run 'git init' first" -ForegroundColor Yellow
    exit 1
}

# Check git status
Write-Host "📊 Checking git status..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "📦 Adding all files..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "📝 Creating commit..." -ForegroundColor Yellow
git commit -m "Fix Netlify deployment - change build to dist directory"

Write-Host ""
Write-Host "🌐 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "✅ Done! Your changes are pushed to GitHub" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://app.netlify.com/" -ForegroundColor White
Write-Host "2. Click 'Add new site' → 'Import an existing project'" -ForegroundColor White
Write-Host "3. Connect your GitHub repository" -ForegroundColor White
Write-Host "4. Netlify will auto-detect settings from netlify.toml" -ForegroundColor White
Write-Host "5. Click 'Deploy site'" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Your site will be live in a few minutes!" -ForegroundColor Green
