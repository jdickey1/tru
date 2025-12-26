# PageSpeed Issues Checklist: texasrepublicansunited.com

**Analysis Date:** December 25, 2025
**Current Scores:** Performance 96 (Mobile) / 100 (Desktop) | Accessibility 96 | Best Practices 100 | SEO 100

---

## Core Web Vitals Summary

| Metric | Mobile | Desktop | Target |
|--------|--------|---------|--------|
| FCP (First Contentful Paint) | 1.5s | 0.3s | <1.8s |
| LCP (Largest Contentful Paint) | 1.9s | 0.5s | <2.5s |
| TBT (Total Blocking Time) | 40ms | 0ms | <200ms |
| CLS (Cumulative Layout Shift) | 0 | 0 | <0.1 |
| Speed Index | 4.5s | 0.9s | <3.4s |

**Status:** Excellent! Desktop is perfect 100. All Core Web Vitals passing on both Mobile and Desktop.

---

## HIGH PRIORITY - Accessibility (Contrast Issue) ✅ FIXED - 2025-12-26

### 1. Color Contrast: White Text on Texas Red Background
- [x] Test `text-white/70` contrast against `--texas-red` background
- [x] Increase opacity or use solid white for better contrast
- [ ] Verify fix with WebAIM Contrast Checker (4.5:1 ratio required)
- [ ] Re-test with PageSpeed to confirm Accessibility score improvement

**Fix Applied:** Changed all `text-white/70` → `text-white/90` in `app/page.tsx` (8 instances)

**Failing Elements:**

| Element | Current Style | Issue |
|---------|--------------|-------|
| "Political Advertisement..." text | ~~`text-white/70`~~ `text-white/90` | ✅ Fixed |
| Donate section | `bg-[var(--texas-red)]` | Background color in contrast issue |

**Location:** `#donate` section
**CSS Class:** ~~`<p class="text-white/70 text-sm mt-6">`~~ `<p class="text-white/90 text-sm mt-6">`

**Fix:**
```tsx
// Before
<p className="text-white/70 text-sm mt-6">
  Political Advertisement Paid for by Texas Republicans United PAC
</p>

// After - increase opacity for better contrast ✅ APPLIED
<p className="text-white/90 text-sm mt-6">
  Political Advertisement Paid for by Texas Republicans United PAC
</p>

// Or use solid white
<p className="text-white text-sm mt-6 opacity-90">
  Political Advertisement Paid for by Texas Republicans United PAC
</p>
```

---

## MEDIUM PRIORITY - Performance Optimization

### 2. JavaScript Bundle Optimization ✅ FIXED - 2025-12-26
- [x] Update browserslist in `package.json` to modern browsers only
- [x] Remove legacy polyfills
- [x] Rebuild and verify bundle size reduction

**📋 STANDARD BROWSERSLIST CONFIG:** Use the VPS-wide standard from `/home/obsidian/automation-vault/PageSpeed-GlobalFixes-VPS.md`:
```json
{
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
    "last 2 Edge versions",
    "not dead"
  ]
}
```

**Fix Applied:** Added browserslist to `package.json` - deployed 2025-12-26

**Problem File:** `a0e9039376638b5f.js`
**Legacy Polyfills (13.4 KiB):** ✅ Removed via browserslist
- [x] Array.prototype.at
- [x] Array.prototype.flat
- [x] Array.prototype.flatMap
- [x] Object.fromEntries
- [x] Object.hasOwn
- [x] String.prototype.trimStart
- [x] String.prototype.trimEnd

### 3. Reduce Unused JavaScript
- [ ] Analyze bundle with `npx @next/bundle-analyzer`
- [ ] Identify and remove unused code
- [ ] Consider code splitting for page-specific features

**Potential Savings:** 53 KiB of unused JavaScript

### 4. Render-Blocking Requests
- [ ] Defer non-critical CSS
- [ ] Inline critical above-the-fold CSS
- [ ] Consider font-display: swap for web fonts

**Render Blocking Savings:**
- Mobile: 430ms
- Desktop: 110ms

### 5. Long Main-Thread Task
- [ ] Identify the long task in Chrome DevTools Performance tab
- [ ] Break up long JavaScript execution
- [ ] Consider Web Workers for heavy computation

**Issue:** 1 long task found on both Mobile and Desktop

---

## LOW PRIORITY - Security Headers

### 6. Add Security Headers (nginx) ✅ HANDLED GLOBALLY - 2025-12-26
- [x] Add Content-Security-Policy header (High severity)
- [x] Add Cross-Origin-Opener-Policy header (High severity)
- [x] Add Trusted Types directive to CSP (High severity)
- [x] Update HSTS header with `preload` directive (Medium severity)
- [ ] Submit to HSTS preload list (hstspreload.org) *(system-wide task)*

**🌐 GLOBAL FIX:** This is handled at the VPS nginx level, not per-project.
- **Snippet:** `/etc/nginx/snippets/security-headers-with-analytics.conf`
- **Reference:** See `/home/obsidian/automation-vault/PageSpeed-GlobalFixes-VPS.md`

No action needed from tru project - nginx configuration is complete.

---

## INFORMATIONAL - Passing/Good

- **Desktop Performance:** 100 - Perfect!
- **Mobile Performance:** 96 - Excellent
- **LCP:** 1.9s mobile / 0.5s desktop - Well within target
- **TBT:** 40ms mobile / 0ms desktop - Excellent
- **CLS:** 0 on both - Perfect stability
- **Best Practices:** 100 - No console errors
- **SEO:** 100 - Perfect
- **No image optimization needed** - No flagged images
- **No third-party impact** - Fully first-party

---

## VPS Commands Reference

```bash
# SSH to VPS
ssh nonrootadmin

# Switch to tru user
sudo -u tru -i

# Navigate to project
cd /home/tru/app

# Search for contrast issue
grep -r "text-white/70" app/
grep -r "texas-red" app/

# Check CSS variables
grep -r "--texas-red" app/

# Check browserslist
cat package.json | grep -A5 browserslist

# Analyze bundle
npx @next/bundle-analyzer

# Deploy (NEVER run npm run build or pm2 restart directly!)
./deploy.sh prod

# Check nginx config
sudo cat /etc/nginx/sites-enabled/tru

# Test nginx config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

---

## Verification

After implementing fixes, re-run PageSpeed analysis:

- [ ] Mobile Performance score maintained >= 95
- [ ] Desktop Performance score = 100 (maintain)
- [ ] Accessibility score improved to 100 (fix contrast)
- [ ] Legacy polyfills removed
- [ ] Security headers verified in browser DevTools

**PageSpeed URL:** `https://pagespeed.web.dev/analysis?url=https://texasrepublicansunited.com`

---

## Global vs Project-Specific Fixes

| Fix Type | Status | Notes |
|----------|--------|-------|
| **Security Headers (nginx)** | ✅ Global | Handled via `/etc/nginx/snippets/security-headers-with-analytics.conf` |
| **HSTS Preload Submission** | 🔄 Global | System-wide task at hstspreload.org |
| **Browserslist Config** | ✅ Project | Added to package.json 2025-12-26 |
| **Contrast Fix** | ✅ Project | Changed text-white/70 → text-white/90 |

**Reference:** `/home/obsidian/automation-vault/PageSpeed-GlobalFixes-VPS.md`

---

## Notes

_Add implementation notes here as you work through the checklist:_

- **One of the best performing VPS sites** - 100 Desktop, 96 Mobile
- Main issue is a single color contrast problem in the donate section
- Uses Playfair Display font (similar to winningonissues.com)
- Same legacy polyfill issue as all other VPS projects
- No images flagged for optimization - efficient asset usage
- `--texas-red` is a CSS custom property - check tailwind.config.js or globals.css
- The white/70 (70% opacity white) on red background fails WCAG contrast
- 2025-12-26: Security headers verified working globally via nginx
- 2025-12-26: Fixed contrast issue - changed all text-white/70 → text-white/90 (8 instances in page.tsx)
- 2025-12-26: Added browserslist to package.json to eliminate legacy polyfills (~13.4 KiB savings)
- 2025-12-26: Deployed via ./deploy.sh prod - build successful

