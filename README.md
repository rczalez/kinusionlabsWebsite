# Kinusion Labs - GitHub Pages (matches prototype)

This .zip is the static version of the last prototype you previewed.

## Structure
- index.html - all sections, same copy as prototype
- styles.css - exact palette #8A52D9 / #7043B0 / #533282 / #3C245E / #221436, Encode Sans Semi Expanded, floaty / drift animations, hero-mask
- script.js - ES/EN toggle, project filters, tutorial expand, mobile menu, smooth scroll
- assets/hero.webp, quest.webp, specs.webp - same images as prototype
- CNAME - contains kinusionlabs.com - KEEP IT, otherwise GitHub drops your custom domain
- .nojekyll

## Upload to GitHub Pages (kinusionlabs.com already configured)
1. In your repo, delete old files and upload ALL files from this zip to root of `main` branch (keep CNAME)
2. Settings > Pages > Custom domain should still show kinusionlabs.com - if it was cleared, re-enter it and Save
3. Enforce HTTPS should stay on
4. Hard refresh https://kinusionlabs.com

## Differences vs prototype preview
- Contact form: prototype saved to the preview database. GitHub Pages has no backend, so this version uses Formspree.
  Replace `https://formspree.io/f/your-id` in index.html with your Formspree ID.
- Founder photo: still RGC placeholder. Replace the .avatar div with <img src="assets/founder.jpg"> after uploading your photo to assets/.
