import React from 'react';

const Recipe = (props) => {
  return (
    <div className="recipe">
      <img src={props.recipe.thumbnail} />
      <h4>{props.recipe.title}</h4>
      <h6>Ingredients: {props.recipe.ingredients}</h6>
      <h6>Click <a href={props.recipe.href} target="_blank">here</a> for full recipe.</h6>
      {props.favoriteRecipes.includes(props.recipe) ? <button onClick={props.removeFavorite}>Unfavorite</button> : <button onClick={props.addFavorite}>Favorite</button>}
    </div>
  )
}

export default Recipe;
