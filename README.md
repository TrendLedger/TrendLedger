# TrendLedger Website

Premium, editorial-style landing site for TrendLedger — demand intelligence for fashion brands.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, manifesto, product overview, CTA |
| Product | `product.html` | How it works, TVS deep dive, features |
| Philosophy | `philosophy.html` | Brand essay, principles |
| Pricing | `pricing.html` | Three plans, FAQ |
| Early Access | `early-access.html` | Application form, demo booking |

---

## Hosting on GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it `trendledger` (or `yourusername.github.io` for a root domain)
4. Set to **Public**
5. Click **Create repository**

### Step 2 — Upload the files

**Option A — GitHub web interface (easiest):**
1. In your new repo, click **Add file → Upload files**
2. Drag all 7 files into the upload area:
   - `index.html`
   - `product.html`
   - `philosophy.html`
   - `pricing.html`
   - `early-access.html`
   - `styles.css`
   - `main.js`
3. Commit with message: `Initial site launch`

**Option B — Git CLI:**
```bash
git init
git add .
git commit -m "Initial site launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trendledger.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main`, folder: `/ (root)`
5. Click **Save**

### Step 4 — Access your site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/trendledger/
```

It may take 1–3 minutes to go live after enabling Pages.

---

## Custom Domain (optional)

1. Buy a domain (e.g., from Namecheap, Cloudflare, Google Domains)
2. In your repo **Settings → Pages**, enter your custom domain
3. Add a `CNAME` file to your repo with just your domain:
   ```
   trendledger.com
   ```
4. In your DNS provider, add:
   - `A` records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a `CNAME` record: `www` → `yourusername.github.io`

---

## File Structure

```
trendledger/
├── index.html          ← Home page
├── product.html        ← Product page
├── philosophy.html     ← Philosophy / manifesto
├── pricing.html        ← Pricing plans
├── early-access.html   ← Application + demo form
├── styles.css          ← All styles
├── main.js             ← Scroll, animations, nav
└── README.md           ← This file
```

---

## Tech Stack

- Pure HTML / CSS / JavaScript — no build step needed
- Google Fonts (Cormorant Garamond + Epilogue)
- Fully responsive
- GitHub Pages compatible (no server-side code)
