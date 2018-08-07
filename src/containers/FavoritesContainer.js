import React, { Fragment } from 'react';
import Recipe from '../components/Recipe';

const FavoritesContainer = (props) => {
  let recipes = props.favoriteRecipes.map(r => {
    return <Recipe favoriteRecipes={props.favoriteRecipes} addFavorite={() => props.addFavorite(r)} removeFavorite={() => props.removeFavorite(r)} recipe={r} />
  })
  return (
    <div className="favorites-container">
      {recipes.length !== 0 ? <Fragment><h4 className="center">Your Favorites</h4>{recipes}</Fragment> : <h4 className="center">You don't have any favorites yet.</h4>}
    </div>
  )
}

export default FavoritesContainer
