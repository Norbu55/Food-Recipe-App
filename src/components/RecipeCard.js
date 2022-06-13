import React, { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const [instruction, setInstruction] = useState(false);

  const changeData = () => {
    setInstruction(!instruction);
  };

  const { idMeal, strMeal, strCategory, strMealThumb, strInstructions } =
    recipe;

  const Results = () => (
    <div id="results" className="search-results">
      {strInstructions}
    </div>
  );

  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <div>
          <input type="submit" value="Instructions" onClick={changeData} />
          {instruction ? <Results /> : null}
        </div>
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">
          Ingredients
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
