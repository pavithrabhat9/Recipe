import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './Components/RecipeCard';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res.data.recipes);
        setRecipes(res.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 style={{
        textAlign: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#FF4500",
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "2px",
        margin: "0 0 20px 0",
        padding: "10px",
        textShadow: "3px 3px 8px rgba(0, 0, 0, 0.2)"
      }}>
        Delicious Recipes
      </h1><hr />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {recipes.map((item) => <RecipeCard key={item.id} item={item} />)}
      </div>
    </>
  );
}

export default App;
