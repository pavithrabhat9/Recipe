# 🍳 Recipe App

A **React-based recipe discovery application** showcasing modern frontend development practices. Browse recipes, view detailed nutritional info, ingredients, preparation steps, and images in a responsive UI.

> **📚 Learning Project** – Built to practice React fundamentals: component-based architecture, state management, API integration, and responsive design.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Recipe Browsing** | Explore a collection of recipes with instant visual feedback |
| **Detailed Recipe View** | Full ingredients list, calorie count, macros, step-by-step instructions with images |
| **Social Interactions** | Like and share functionality to save favorites |
| **Responsive Design** | Mobile-first layout optimized for all screen sizes |
| **Image Gallery** | Recipe photos with thumbnail navigation |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 |
| **Styling** | CSS3 / Tailwind CSS |
| **State** | React Hooks (useState, useEffect, useContext) |
| **Routing** | React Router |
| **HTTP Client** | Fetch API / Axios |

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ & npm v8+

### Installation

```bash
# Clone the repository
git clone https://github.com/pavithrabhat9/Recipe.git
cd Recipe

# Install dependencies
npm install

# Start development server
npm start
```

App runs at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
Recipe/
├── public/                    # Static assets
│   └── index.html
├── src/
│   ├── components/
│   │   ├── RecipeCard.jsx     # Recipe preview card
│   │   ├── RecipeDetail.jsx   # Full recipe view
│   │   ├── SearchBar.jsx      # Search & filter
│   │   └── NavBar.jsx         # Navigation
│   ├── pages/
│   │   ├── Home.jsx           # Recipe listing
│   │   └── SingleRecipe.jsx   # Recipe detail page
│   ├── App.js                 # Root routing
│   ├── index.css              # Global styles
│   └── index.js               # Entry point
├── package.json
└── README.md
```

---

## 💡 Key Learnings

This project demonstrates:
- ✅ Component composition and reusability
- ✅ React hooks (useState, useEffect, useContext)
- ✅ API integration & data fetching
- ✅ Conditional rendering & list rendering
- ✅ CSS Grid/Flexbox for responsive layouts
- ✅ Client-side routing with React Router

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "axios": "^1.x"
}
```

---

## 🔄 Available Scripts

```bash
npm start      # Development server
npm run build  # Production build
npm test       # Run tests
```

---

## 🎯 What's Next

- [ ] Add recipe ratings & user reviews
- [ ] Implement meal planning feature
- [ ] Generate grocery list from recipes
- [ ] Add cooking timer
- [ ] Dark mode toggle
- [ ] Recipe favorites / bookmarks with localStorage

---

<p align="left">
Built with <strong> using React</strong> as a portfolio project. <br/>
</p>
