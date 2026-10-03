# 🌿 Paradise Nursery

A demo plant-shop web application for browsing houseplants and filling a shopping cart. "Paradise Nursery" is the shop name used in the app; its catalogue has 15 plants in three categories: air-purifying plants, aromatic herbs and flowering plants.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?logo=css3)

## About this repository

> **Learning project, older copy.** A front-end exercise: a small plant-shop storefront built with React, Redux Toolkit and Vite. It is a demo, not a real shop: there is no backend, no accounts and no payments. The same code, with fixes, tests and CI, is maintained in **[konethegreat/e-plantShopping](https://github.com/konethegreat/e-plantShopping)**; use that repository.

| | |
| --- | --- |
| **Status** | Superseded by [e-plantShopping](https://github.com/konethegreat/e-plantShopping) (see "Relationship" below). Kept for reference; not archived. |
| **Origin** | IBM Skills Network publishes a starter template named `e-plantShopping` ([ibm-developer-skills-network/e-plantShopping](https://github.com/ibm-developer-skills-network/e-plantShopping), Apache-2.0). The component names (`ProductList`, `CartItem`, `AboutUs`) and the Redux reducer names (`addItem`, `removeItem`, `updateQuantity`) match that template, so this repository appears to be a solution to that exercise. It is **not** a GitHub fork and its history does not contain the template's files; the file layout, plant data, styling and routing differ from the template. |
| **Authorship** | All 18 commits (17 May 2026) are authored by Kone Tshivhinda (`git log`). This README update (October 2026) was prepared with Claude (Anthropic); the code is unchanged. |
| **Checks** | On 3 October 2026 (Node 26.8.1, Windows): `npm ci` and `npm run lint` pass, and in a scripted headless-browser run against the dev server the shopping flow works (catalogue, add to cart, totals). `npm run build` **fails** (see "Known issues"). There are no automated tests and no CI workflow. |
| **Demo** | None hosted. |

### Relationship to e-plantShopping

[konethegreat/e-plantShopping](https://github.com/konethegreat/e-plantShopping) contains the same application. All 18 commits of this repository are part of its history, and at that point (`bff1ee5`) the two source trees were identical. e-plantShopping then renamed `src/redux/CartSlice.js` to `CartSlice.jsx` (no content change) and added the fixes listed under "Known issues" below (the build, the About Us route and the locked dependencies), 24 tests, a CI workflow and a rewritten README. Both repositories set `homepage` in `package.json` to `https://konethegreat.github.io/e-plantShopping`. This repository is left as it was, apart from this README.

## ⚠️ Known issues

Found on 3 October 2026. Items 1 to 3, and the production part of item 4, are fixed in [e-plantShopping](https://github.com/konethegreat/e-plantShopping); they are left unfixed here on purpose (see "Relationship" above).

1. **`npm run build` fails.** Checked on Windows (Node 26.8.1) and on Linux (Node 22.22.0). `src/App.css` sets the landing-page background to `url('/https://plantify.co.za/...')`; because of the leading `/`, Vite looks for a local file `/https:/plantify.co.za/...` and stops with `ENOENT`. `npm run deploy` runs the build first, so it fails the same way.
2. **The landing-page background photo does not load, even in development.** The dev server answers the malformed URL with an HTML page instead of an image (checked with curl).
3. **"About Us" shows a blank page.** The navigation link goes to `/about`, but `src/App.jsx` only has routes for `/`, `/products` and `/cart`, and `src/components/AboutUs.jsx` is not used anywhere. The browser console shows `No routes matched location "/about"`.
4. **Dependencies with known advisories.** `npm audit` on the committed `package-lock.json` reports 14 vulnerabilities (1 low, 2 moderate, 11 high), two of them in the production dependencies `react-router` and `react-router-dom` (a fix is available with `npm audit fix`).
5. **Photos are hot-linked** from 12 different third-party hosts. Their licence terms were not checked and the links can break.
6. **No automated tests and no CI workflow.** The CSS has no media queries.
7. **Unused files:** `src/components/LandingPage.jsx` and `src/components/Layout.jsx` (`src/App.jsx` defines its own landing page).

---

## ✨ Features

The catalogue and the cart are the same as in e-plantShopping, whose README has [screenshots](https://github.com/konethegreat/e-plantShopping#screenshots).

### 🏠 Landing Page
- Full-screen hero with a welcome message and a **Get Started** button that opens the plant catalogue (the background photo does not load in this copy; see "Known issues")

### 🌱 Plant Catalog
- Browse plants organized by category:
  - **Air Purifying**: Snake Plant, Spider Plant, Pothos, Peace Lily, Dracaena
  - **Aromatic**: Lavender, Rosemary, Mint, Basil, Thyme
  - **Flowering**: Anthurium, African Violet, Orchid, Begonia, Geranium
- Grid of plant cards that reflows to the available width, with hover effects
- Price shown for each plant
- **Add to Cart** button per plant; once a plant is in the cart its button shows "Added" and is disabled

### 🛒 Shopping Cart
- Add plants from the catalogue and remove them with **Delete**
- **+** / **-** buttons change the quantity; decreasing it to 0 removes the plant
- "Total Items" and "Total Amount" update as the cart changes
- Shows "Your cart is empty." when there is nothing in the cart
- The navigation bar shows a badge with the number of items in the cart; the cart lives in memory only and is lost when the page is reloaded
- **Continue Shopping** returns to the catalogue; **Checkout** only shows a "Coming Soon!" alert

### 📖 About Us Page
- `src/components/AboutUs.jsx` holds a welcome sentence and a one-sentence mission statement, but the page cannot be reached in this copy because it has no route (see "Known issues")

### 🎨 Look and feel
- Green colour scheme with a gradient navigation bar and gradient buttons
- CSS transitions and hover effects on cards and buttons, a fade-in on the landing page and a pulsing cart badge

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** 19 | UI framework |
| **Redux Toolkit** + React-Redux | State management (the cart) |
| **React Router** 7 (`react-router-dom`) | Client-side routing |
| **Vite** 8 | Dev server and build tool (the production build currently fails: see "Known issues") |
| **CSS3** | Plain CSS in `src/App.css` |
| **ESLint** | Linting |

---

## 📁 Project Structure

```
Paradise-Nursery/
├── public/                         # Static assets (favicon, icons)
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation bar with the cart badge
│   │   ├── ProductList.jsx         # Plant catalogue (/products)
│   │   ├── CartItem.jsx            # Shopping cart page (/cart)
│   │   ├── AboutUs.jsx             # About Us content (no route in this copy)
│   │   ├── LandingPage.jsx         # Not used: App.jsx renders its own landing page
│   │   └── Layout.jsx              # Not used by the router
│   ├── data/
│   │   └── plants.js               # Plant catalogue data (15 plants)
│   ├── redux/
│   │   ├── store.js                # Redux store configuration
│   │   └── CartSlice.js            # Cart state, actions and selectors
│   ├── App.jsx                     # Routes and the landing page
│   ├── App.css                     # Styles
│   ├── index.css                   # Empty
│   └── main.jsx                    # Entry point (Redux Provider)
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+ (the minimum Vite 8 declares). The commands below were run on Node 26.8.1 (Windows); the failing build was also run on Node 22.22.0 (Linux).
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/konethegreat/Paradise-Nursery.git
   cd Paradise-Nursery
   ```

2. **Install dependencies** (installs exactly what `package-lock.json` lists)
   ```bash
   npm ci
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Open the URL Vite prints, normally `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This is meant to write the optimized build to `dist/`, but it currently fails with the error described under "Known issues". Use the maintained [e-plantShopping](https://github.com/konethegreat/e-plantShopping) if you need a working build.

---

## 📋 Available Scripts

- `npm run dev` - Start development server with hot module replacement (works)
- `npm run build` - Create production build (fails: see "Known issues")
- `npm run preview` - Preview production build locally (needs a successful build first)
- `npm run lint` - Run ESLint (passes)
- `npm run deploy` - Build, then publish `dist/` to a `gh-pages` branch with the `gh-pages` tool. It fails at the build step and was not run.

---

## 🎨 Design Highlights

- **Color Palette**: Forest greens (#2d6a4f, #40916c, #52b788) with warm accents (#f4a261)
- **Typography**: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- **Animations**: CSS transitions and hover effects on cards and buttons

---

## 🔄 Redux State Management

The app uses Redux Toolkit to manage the shopping cart state:

- **Cart Slice** (`src/redux/CartSlice.js`): state is `{ cart: { items: [{ ...plant, quantity }] } }`
- **Actions**: `addItem` (adds a plant with quantity 1, or increments it if already present), `removeItem` (by plant id), `updateQuantity` (`{ id, quantity }`; a quantity of 0 or less removes the item)
- **Selectors**: `selectCartItems`, `selectTotalQuantity`, `selectTotalCost`
- The cart is not persisted: reloading the page empties it.

---

## 📱 Navigation

- **Home** (`/`) - Landing page with a **Get Started** button
- **Plants** (`/products`) - Browse all plant categories
- **About Us** (`/about`) - The link exists in the navigation bar, but this route is not defined in this copy (blank page; see "Known issues")
- **Cart** (`/cart`) - View and manage shopping cart

The navigation bar (Home, Plants, About Us, Cart) is shown on the catalogue and cart pages, not on the landing page.

---

## 🚀 Longer-term Ideas (not started)

- User authentication & accounts
- Product reviews and ratings
- Search and filtering functionality
- Payment gateway integration
- Order tracking system
- User wishlist feature
- Plant care guides and tips
- Email notifications

---

## 💡 Tips for Development

1. **Hot Module Replacement (HMR)**: Changes are reflected instantly during development
2. **Redux DevTools**: Use Redux DevTools browser extension for state debugging
3. **Component Reusability**: Keep components small and focused on single responsibilities
4. **CSS Organization**: Styles are centralized in App.css for easy maintenance

---

## 📝 License

This project is open source and available under the MIT License.

No `LICENSE` file is included in the repository at the moment.

---

## 🤝 Support

For questions or issues, please create an issue in the repository.
