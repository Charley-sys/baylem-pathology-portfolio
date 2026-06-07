# Baylem Cold Chain & Pathology Solutions — Portfolio Website

A focused, premium portfolio website showcasing Baylem's Cold Chain and Pathology capabilities.
## View The Live Site Here https://baylem-pathology-portfolio-website.vercel.app/

---

## 🚀 Quick Start

```bash
# 1. Navigate to the project folder
cd baylem-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
baylem-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.js                    ← Main app (add/remove sections here)
│   ├── index.js                  ← Entry point
│   ├── index.css                 ← Global styles + Tailwind
│   │
│   ├── data/
│   │   └── content.js            ← ✅ ALL CONTENT LIVES HERE
│   │                                Edit text, projects, specs, partners
│   │
│   ├── assets/
│   │   └── images/
│   │       ├── hero/             ← Hero background image
│   │       ├── coldchain/        ← Cold chain product/system images
│   │       ├── pathology/        ← Pathology equipment images
│   │       ├── projects/         ← Project photography
│   │       └── partners/         ← Partner/brand logos
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        ← Navigation bar
│   │   │   └── Footer.jsx        ← Footer
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx          ← Full-screen hero
│   │   │   ├── StatsStrip.jsx    ← Animated stats (15+, 200+, 47)
│   │   │   ├── ColdChain.jsx     ← Cold chain card grid
│   │   │   ├── Pathology.jsx     ← Pathology solutions + filter
│   │   │   ├── Projects.jsx      ← Project cards + case study modal
│   │   │   ├── Partners.jsx      ← Scrolling marquee logo wall
│   │   │   └── Contact.jsx       ← Contact form + WhatsApp
│   │   │
│   │   └── ui/
│   │       ├── AnimatedSection.jsx  ← Framer Motion scroll reveal wrappers
│   │       ├── Badge.jsx            ← Category badge chips
│   │       ├── Button.jsx           ← Reusable button component
│   │       └── ImagePlaceholder.jsx ← Handles real images OR gradient placeholders
│   │
│   └── hooks/
│       └── useInView.js          ← Intersection observer hook
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🖼️ Adding Real Images

Images are the most important upgrade. The site is fully ready — just drop in your files.

### Step 1 — Place your images in the correct folders

```
src/assets/images/
├── hero/
│   └── hero-main.jpg              ← Main hero background (1920×1080 recommended)
│
├── coldchain/
│   ├── vaccine-cold-room.jpg      ← Walk-in cold room / vaccine storage
│   ├── blood-bank.jpg             ← Blood bank refrigerators
│   ├── ult-freezer.jpg            ← Ultra-low temperature freezer (-80°C)
│   ├── walk-in-cold-room.jpg      ← Industrial cold room
│   ├── ca-storage.jpg             ← Controlled atmosphere storage
│   └── monitoring-system.jpg      ← IoT monitoring dashboard/panel
│
├── pathology/
│   ├── tissue-processor.jpg       ← Tissue processing system
│   ├── embedding-station.jpg      ← Embedding/dispensing workstation
│   ├── microtome-cryostat.jpg     ← Microtome or cryostat
│   ├── mortuary-cabinets.jpg      ← Body storage unit / cabinet
│   ├── autopsy-suite.jpg          ← Autopsy room
│   └── grossing-station.jpg       ← Grossing/fume extraction station
│
├── projects/
│   ├── knh-cold-room.jpg          ← KNH project
│   ├── coast-general-mortuary.jpg ← Coast General project
│   ├── jaramogi-histopath.jpg     ← Jaramogi lab project
│   └── nakuru-blood-bank.jpg      ← Nakuru project
│
└── partners/
    ├── thermo-fisher.png          ← Transparent PNG logos preferred
    ├── leica-biosystems.png
    ├── sakura-finetek.png
    └── ...
```

### Step 2 — Reference images in content.js

Open `src/data/content.js` and update each item:

```js
// BEFORE (gradient placeholder):
image: null,

// AFTER (real image):
image: require("../assets/images/coldchain/vaccine-cold-room.jpg"),
```

### Step 3 — For partner logos

Open `src/components/sections/Partners.jsx` and find the comment:

```jsx
{/* TO USE REAL PARTNER LOGOS: Replace this div with: */}
<img
  src={require(`../../assets/images/partners/${partner.logo}`)}
  alt={partner.name}
  className="h-7 object-contain"
/>
```

Then add a `logo` field to each partner in `content.js`:

```js
{ id: 1, name: "Thermo Fisher Scientific", category: "...", logo: "thermo-fisher.png" },
```

### Step 4 — Hero image

In `src/components/sections/Hero.jsx`, find the comment block and replace the two cards with:

```jsx
<img
  src={require("../../assets/images/hero/hero-main.jpg")}
  alt="Baylem cold room installation"
  className="w-full h-[460px] object-cover rounded-2xl"
/>
```

---

## ✏️ Editing Content

All text, project details, specs, and partners are in one file:

**`src/data/content.js`**

- `coldChainSolutions` — Cold chain cards (title, description, specs, image)
- `pathologySolutions` — Pathology cards (title, description, brand, image)
- `projects` — Case studies (name, location, challenge, solution, impact)
- `partners` — Technology partner logos/names
- `stats` — The 4 animated statistics

---

## 🎨 Customising Colors

Open `tailwind.config.js`. The primary blue is `#0B3D8F`.

To change the brand color:

```js
blue: {
  800: "#YOUR_BRAND_BLUE_HERE",
  ...
}
```

---

## 📬 Connecting the Contact Form

The form currently shows a success state after 1.5 seconds (simulated).

To connect a real backend, open `src/components/sections/Contact.jsx` and replace the `handleSubmit` function:

**Option A — Formspree (easiest, free tier available):**

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (res.ok) setSubmitted(true);
  setLoading(false);
};
```

**Option B — EmailJS (sends directly to your email):**

```bash
npm install @emailjs/browser
```

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `/build` folder. Upload to any static host:
- **Vercel** (recommended, free): `vercel deploy`
- **Netlify**: Drag `/build` folder to netlify.com
- **cPanel/Shared hosting**: Upload contents of `/build` via FTP

---

## 🧩 Tech Stack

| Library | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Tailwind CSS | 3 | Utility-first styling |
| Framer Motion | 11 | Animations & transitions |
| Lucide React | latest | Icons |
| clsx | 2 | Conditional classNames |

---

## 📞 Support

For questions about the website, contact your developer or refer to:
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev)
