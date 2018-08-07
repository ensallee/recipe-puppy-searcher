import React, { Fragment, Component } from 'react';
import Recipe from '../components/Recipe'

class RecipeContainer extends Component {
  render() {
    let recipes = this.props.recipeList.map(r => {
      return <Recipe recipe={r} />
    })
    return (
      <Fragment>
        {recipes}
      </Fragment>
    )
  }
}

export default RecipeContainer;
