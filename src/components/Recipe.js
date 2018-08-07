import React from 'react';

const Recipe = (props) => {
  return (
    <div>
      <img src={props.recipe.thumbnail} />
      <h4>{props.recipe.title}</h4>
      <h6>Ingredients: {props.recipe.ingredients}</h6>
      <h6>Source: {props.recipe.href}</h6>
    </div>
  )
}

export default Recipe;
