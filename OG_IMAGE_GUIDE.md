# Open Graph Image Creation Guide

## Quick Specs for Designers

### Required Specifications
- **Dimensions**: 1200px × 630px
- **Format**: JPG or PNG (JPG recommended for smaller file size)
- **File Name**: `og-image.jpg`
- **Location**: Save to `public/og-image.jpg`
- **File Size**: Keep under 1MB (ideally under 500KB)
- **Color Mode**: RGB

---

## Design Recommendations

### Content to Include
1. **TricksFor Logo** (prominently displayed)
2. **Tagline**: "Web3 Crypto Gaming Hub"
3. **Key Features**: Dice, Coin Flip, Rock Paper Scissors
4. **Visual Elements**: 
   - Blockchain/crypto themed graphics
   - Gaming elements (dice, coins)
   - Gradient backgrounds matching brand colors

### Brand Colors (from your design system)
- **Primary Dark**: #1e1b4b (bg-primary-900)
- **Primary Medium**: #312e81 (bg-primary-800)
- **Gradient**: Blue (#60a5fa) → Purple (#c084fc) → Pink (#f472b6)
- **Text**: White (#ffffff)

### Typography
- **Primary Font**: Poppins (as used in site)
- **Title Size**: 60-72px bold
- **Subtitle Size**: 32-40px regular
- **Ensure readability**: Use high contrast

---

## Safe Zones

When designing, respect these safe zones to ensure content displays properly across all platforms:

```
1200px width
┌──────────────────────────────────────────────┐
│  40px margin                                  │
│  ┌────────────────────────────────────────┐  │
│  │                                        │  │
│  │     SAFE ZONE (1120px × 550px)        │  │
│  │                                        │  │
│  │  Place all important content here     │  │
│  │  (logo, text, key visuals)            │  │
│  │                                        │  │
│  └────────────────────────────────────────┘  │
│  40px margin                                  │
└──────────────────────────────────────────────┘
630px height
```

**Why?** Some platforms crop edges, so keep critical content centered.

---

## Design Templates

### Option 1: Simple & Clean
```
┌────────────────────────────────────────────────┐
│                                                │
│              [TricksFor Logo]                  │
│                                                │
│         Web3 Crypto Gaming Hub                 │
│                                                │
│    🎲  Dice  |  🪙  Coin Flip  |  ✊  RPS     │
│                                                │
│        Play • Win • Earn Crypto                │
│                                                │
└────────────────────────────────────────────────┘
Background: Gradient (blue → purple → pink)
```

### Option 2: Visual Heavy
```
┌────────────────────────────────────────────────┐
│  [TricksFor Logo]      [Dice + Coin Images]   │
│                                                │
│       Web3 Crypto Gaming Hub                   │
│                                                │
│   Blockchain Gaming on Polygon, Arbitrum,      │
│        Avalanche, BSC & Optimism              │
│                                                │
│          www.tricksfor.com                     │
└────────────────────────────────────────────────┘
Background: Dark gradient with geometric patterns
```

### Option 3: Game Focused
```
┌────────────────────────────────────────────────┐
│                 TricksFor                      │
│                                                │
│  [Game Screenshots/Icons in 3 columns]         │
│    DICE      COIN FLIP      RPS                │
│                                                │
│    Provably Fair • Instant Payouts             │
│        Powered by Blockchain                   │
│                                                │
└────────────────────────────────────────────────┘
Background: Subtle animation-style graphics
```

---

## Tools to Create OG Image

### Free Online Tools
1. **Canva** (Recommended for beginners)
   - Go to: https://www.canva.com
   - Create custom size: 1200 × 630px
   - Use free templates or start from scratch
   - Download as JPG

2. **Figma** (For designers)
   - Professional design tool
   - Free for individuals
   - Full control over design

3. **Adobe Express** (Adobe's free tool)
   - Easy to use
   - Good templates
   - Free tier available

### Paid Tools
- Adobe Photoshop (industry standard)
- Sketch (Mac only)
- Affinity Photo (one-time purchase)

---

## Content Suggestions

### Primary Text Options
- "TricksFor - Web3 Crypto Gaming"
- "Play Blockchain Games with Crypto"
- "Provably Fair Crypto Gaming Hub"
- "Dice • Coin Flip • RPS | Win Crypto"

### Secondary Text Options
- "On Polygon, Arbitrum, Avalanche, BSC & Optimism"
- "Fast • Secure • Provably Fair"
- "Play Now with MATIC, ETH & More"
- "The Future of Online Gaming"

### Call-to-Action (Optional)
- "Start Playing Now"
- "Join Thousands of Players"
- "Play • Win • Earn"

---

## Testing Your OG Image

### After Creating
1. Save as `og-image.jpg` in `public/` folder
2. Rebuild your site: `npm run build`
3. Deploy to production

### Validation Tools
Test how your image appears:

1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Enter: https://www.tricksfor.com
   - Click "Scrape Again" to refresh cache

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Enter your URL
   - Preview how it looks on Twitter

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Check LinkedIn preview

4. **Social Share Preview**
   - URL: https://socialsharepreview.com/
   - See previews for all platforms at once

---

## Image Optimization

After creating, optimize file size:

### Online Tools
- **TinyPNG**: https://tinypng.com/ (best for PNG)
- **Compressor.io**: https://compressor.io/ (works with JPG)
- **Squoosh**: https://squoosh.app/ (Google's tool)

### Goal
- Original size: Usually 1-2MB
- Optimized size: Target 300-500KB
- Keep quality above 80%

---

## Alternative: Multiple Images

You can create different OG images for different pages:

### Homepage
`public/og-image.jpg` - General platform image

### Game Pages
- `public/og-dice.jpg` - Dice game specific
- `public/og-coin.jpg` - Coin flip specific
- `public/og-rps.jpg` - RPS specific

Then update `src/constants/seoConfig.js`:
```javascript
dice: {
  // ...
  image: `${SITE_URL}/og-dice.jpg`,
  // ...
}
```

---

## Quick Checklist

Before deploying:
- [ ] Image is exactly 1200×630px
- [ ] Saved as `og-image.jpg` in `public/` folder
- [ ] File size is under 1MB
- [ ] Logo is clearly visible
- [ ] Text is readable at small sizes
- [ ] Colors match your brand
- [ ] Tested on Facebook Debugger
- [ ] Tested on Twitter Card Validator
- [ ] Image looks good on mobile preview

---

## Example Code References

Your OG image is referenced in these files:
- `index.html` (line ~29): `<meta property="og:image" content="https://www.tricksfor.com/og-image.jpg" />`
- `src/constants/seoConfig.js` (line 4): `const DEFAULT_IMAGE = '${SITE_URL}/og-image.jpg'`

---

## Need Help?

If you're not a designer:
1. **Hire on Fiverr**: Search "social media banner design" ($10-30)
2. **Use Canva Template**: Search "Open Graph" in templates
3. **Use Screenshot**: Take a nice screenshot of your hero section and crop to 1200×630

---

## Pro Tips

1. **Text Readability**: Use bold fonts, high contrast
2. **Mobile Preview**: It will appear small on phones - keep it simple
3. **Avoid Clutter**: Don't try to fit too much information
4. **Brand Consistency**: Match your site's design style
5. **Test Everywhere**: Check how it looks on all platforms
6. **Update Regularly**: Change for special events/updates

---

**Good luck creating your OG image!** 🎨

Once created, it will significantly improve your social media presence and click-through rates from shared links.
