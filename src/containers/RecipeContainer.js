import React, { Fragment } from 'react';
import Recipe from '../components/Recipe'

const RecipeContainer = (props) => {
  let recipes = props.recipeList.map(r => {
    return <Recipe favoriteRecipes={props.favoriteRecipes} addFavorite={() => props.addFavorite(r)} removeFavorite={() => props.removeFavorite(r)} recipe={r} />
  })
  return (
    <div className="recipe-container">
      {recipes.length !==0 ? <Fragment><h4 className="center">Search Results</h4>{recipes}</Fragment> : <h4 className="center">Enter a search term to view recipes.</h4>}
    </div>
  )
}

export default RecipeContainer;
