# Sally Gordon Therapy — Website

Static website for Sally Gordon Therapy, hosted on GitHub Pages.

## Quick Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g., `sallygordontherapy`)
2. Upload all files from this folder to the repo
3. Go to **Settings → Pages**
4. Set Source to **Deploy from a branch** → `main` → `/ (root)`
5. Site will be live at `https://yourusername.github.io/sallygordontherapy/`

## Connecting Custom Domain (later)

When you have domain access:
1. Update the `CNAME` file with the correct domain
2. In GitHub repo Settings → Pages → Custom domain, enter `sallygordontherapy.com`
3. Add these DNS records at the domain registrar:
   - A record → `185.199.108.153`
   - A record → `185.199.109.153`
   - A record → `185.199.110.153`
   - A record → `185.199.111.153`
   - CNAME `www` → `yourusername.github.io`

## Adding Sally's Photos

Replace the placeholder elements in `index.html`:
- Hero section: Look for `hero-image-placeholder` div and replace with an `<img>` tag
- About section: Look for `about-portrait` div and replace with an `<img>` tag

## File Structure

```
├── index.html          # Homepage
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Nav, mobile menu, scroll animations
├── images/             # Add photos here
├── CNAME               # Custom domain config (update when ready)
└── README.md
```
