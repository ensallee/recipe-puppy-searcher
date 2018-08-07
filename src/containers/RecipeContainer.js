import React, { Fragment, Component } from 'react';
import Recipe from '../components/Recipe'

class RecipeContainer extends Component {
  render() {
    let recipes = this.props.recipeList.map(r => {
      return <Recipe addFavorite={() => this.props.addFavorite(r)} recipe={r} />
    })
    return (
      <div className="recipe-container">
        {recipes.length !==0 ? <Fragment>{recipes}</Fragment> : <h4>Enter a search term to view recipes.</h4>}
      </div>
    )
  }
}

export default RecipeContainer;
