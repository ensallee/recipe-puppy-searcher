import React from 'react';

const Recipe = (props) => {
  return (
    <div className="recipe">
      <img src={props.recipe.thumbnail} />
      <h4>{props.recipe.title}</h4>
      <h6>Ingredients: {props.recipe.ingredients}</h6>
      <h6>Click <a href={props.recipe.href} target="_blank">here</a> for original recipe.</h6>
      <button onClick={props.addFavorite}>Add to Favorites</button>
    </div>
  )
}

export default Recipe;
