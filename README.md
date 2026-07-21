# Arif Silk House — Bridal Boutique Website

Next.js + Tailwind CSS website for **Arif Silk House**, a bridal boutique on Tariq Road, Karachi.

## Chalane ka tareeqa (How to run)

1. Node.js install honi chahiye (v18 ya usse upar). Check karne ke liye terminal mein likhein:
   ```
   node -v
   ```
2. Project folder mein ja kar dependencies install karein:
   ```
   npm install
   ```
3. Local server chalayein:
   ```
   npm run dev
   ```
4. Browser mein kholein: `http://localhost:3000`

## Live/production ke liye

```
npm run build
npm start
```

Isse aap Vercel, Netlify, ya kisi bhi Node hosting par asaani se deploy kar sakte hain (Vercel sab se easy hai — GitHub repo push karke bas connect karna hota hai).

## Structure

- `app/page.js` — homepage jahan saare sections jorray gaye hain
- `components/` — Hero, About, Gallery, Reviews, Visit (hours/map), Footer, Header
- `app/globals.css` — colors aur base styles
- `tailwind.config.js` — color palette (ivory / black / maroon-red) aur fonts

## Customize karna ho to

- **Text/copy**: har component file mein seedha edit kar sakte hain.
- **Images**: abhi royalty-free stock photos (Pexels) use ho rahi hain. Apni boutique ki asli dresses ki photos daalne ke liye `components/Gallery.jsx`, `components/Hero.jsx` aur `components/About.jsx` mein image URLs replace karein — ya `public/` folder mein apni images daal kar wahan se path den.
- **Phone number / WhatsApp**: `tel:` aur `wa.me/` links `Header.jsx`, `Hero.jsx` aur `Visit.jsx` mein hain.
- **Reviews**: `components/Reviews.jsx` mein array update karein.

Koi cheez badalni ho ya naya section chahiye ho, bata dein.
