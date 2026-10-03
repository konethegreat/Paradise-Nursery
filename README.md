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

### 🏠 Landing Page
- Eye-catching hero section with gradient background
- Compelling call-to-action buttons
- Easy navigation to explore plants and learn more about the company

### 🌱 Plant Catalog
- Browse plants organized by category:
  - **Air Purifying**: Snake Plant, Spider Plant, Pothos, Peace Lily, Dracaena
  - **Aromatic**: Lavender, Rosemary, Mint, Basil, Thyme
  - **Flowering**: Anthurium, African Violet, Orchid, Begonia, Geranium
- Responsive grid layout with smooth hover effects
- Detailed pricing information
- Add to cart functionality with duplicate prevention

### 🛒 Shopping Cart
- Add/remove items from cart
- Adjust quantities with increment/decrement buttons
- Real-time cart total and item count
- Empty cart messaging with helpful guidance
- Persistent cart badge in navigation

### 📖 About Us Page
- Company mission and values
- Historical background
- Benefits and highlights
- Professional design with organized sections

### 🎨 Modern UI/UX
- Beautiful gradient design with green color scheme
- Smooth animations and transitions
- Responsive design for all screen sizes
- Professional typography and spacing
- Interactive hover effects and visual feedback

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | UI framework |
| **Redux Toolkit** | State management |
| **React Router** | Client-side routing |
| **Vite** | Build tool & dev server |
| **CSS3** | Styling with modern features |
| **ESLint** | Code quality |

---

## 📁 Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation bar
│   │   ├── Layout.jsx              # Page layout wrapper
│   │   ├── LandingPage.jsx         # Hero landing page
│   │   ├── ProductList.jsx         # Plant catalog
│   │   ├── CartItem.jsx            # Shopping cart page
│   │   └── AboutUs.jsx             # Company information
│   ├── data/
│   │   └── plants.js               # Plant catalog data
│   ├── redux/
│   │   ├── store.js                # Redux store configuration
│   │   └── CartSlice.js            # Cart state & actions
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Global styles
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Base styles
├── public/                         # Static assets
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paradise-nursery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

---

## 📋 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

---

## 🎯 Key Features Implemented

✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile  
✅ **State Management** - Redux Toolkit for efficient cart management  
✅ **Component Architecture** - Modular, reusable components  
✅ **Client-Side Routing** - Smooth navigation between pages  
✅ **Modern Styling** - CSS3 with gradients, animations, and transitions  
✅ **User Experience** - Intuitive interface with visual feedback  
✅ **Performance** - Optimized with Vite for fast builds  

---

## 🌳 Plant Categories

### Air Purifying Plants
Natural air cleaners that improve indoor air quality and create a healthier home environment.

### Aromatic Plants
Fragrant herbs and plants perfect for your kitchen, garden, or living space.

### Flowering Plants
Beautiful blooming plants that add color and elegance to any room.

---

## 🎨 Design Highlights

- **Color Palette**: Forest greens (#2d6a4f, #40916c, #52b788) with warm accents (#f4a261)
- **Typography**: Clean, modern fonts for excellent readability
- **Animations**: Smooth transitions and hover effects for enhanced interactivity
- **Layout**: Centered, spacious design with clear visual hierarchy

---

## 🔄 Redux State Management

The app uses Redux Toolkit to manage the shopping cart state:

- **Cart Slice**: Handles add/remove items, quantity management, and totals
- **Actions**: `addToCart`, `removeFromCart`, `incrementQuantity`, `decrementQuantity`
- **Selectors**: `selectCartItems`, `selectTotalQuantity`, `selectTotalCost`

---

## 📱 Navigation

- **Home** (`/`) - Landing page with company introduction
- **Plants** (`/products`) - Browse all plant categories
- **About Us** (`/about`) - Learn about Paradise Nursery
- **Cart** (`/cart`) - View and manage shopping cart

---

## 🚀 Future Enhancements

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

---

## 🤝 Support

For questions or issues, please reach out or create an issue in the repository.

---

**Made with 🌱 by the Paradise Nursery Team**

Bringing nature home since 2015.
