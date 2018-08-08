import React from 'react';

const Recipe = (props) => {
  console.log('recipe inside recipe', props.recipe)
  return (
    <div className="recipe">
      {props.recipe.thumbnail !== "" ? <img src={props.recipe.thumbnail} /> : <img className="placeholder" src={require('../images/placeholder_food.jpg')} />}
      <h4>{props.recipe.title}</h4>
      <h6>Ingredients: {props.recipe.ingredients}</h6>
      <h6>Click <a href={props.recipe.href} target="_blank">here</a> for full recipe.</h6>
      {props.favoriteRecipes.includes(props.recipe) ? <button onClick={props.removeFavorite}>Unfavorite</button> : <button onClick={props.addFavorite}>Favorite</button>}
    </div>
  )
}

export default Recipe;
