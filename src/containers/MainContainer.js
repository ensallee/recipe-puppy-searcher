import React, { Fragment, Component } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeContainer from './RecipeContainer';
import FavoritesContainer from './FavoritesContainer';
import Adapter from '../components/Adapter';
import { debounce } from 'lodash';

class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      searchTerm: '',
      recipeList: [],
      favoriteRecipes: []
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => this.raiseFetchRecipesWhenUserStopsTyping())
  }

  raiseFetchRecipesWhenUserStopsTyping = debounce(
    () => {
      this.fetchRecipes(this.state.searchTerm);
    }, 300);

  fetchRecipes(term) {
    if (term === '') {
      this.setState({
        recipeList: []
      })
    } else {
      Adapter.fetchRecipes(term)
      .then(data => this.setState({
        recipeList: data.results
      }))
    }
  }

  addFavorite = (recipe) => {
    this.setState({
      favoriteRecipes: [...this.state.favoriteRecipes, recipe]
    })
  }

  removeFavorite = (recipe) => {
    let filteredRecipes = this.state.favoriteRecipes.filter(r => r !== recipe)
    this.setState({
      favoriteRecipes: filteredRecipes
    })
  }

  render() {
    return (
      <Fragment>
        <h1 id="title">Hungry Puppy</h1>
        <h5 className="center">Powered by Recipe Puppy</h5>
        <SearchBar searchTerm={this.state.searchTerm} recipeList={this.state.recipeList} handleChange={this.handleChange} />
        <div className="all-recipes">
          <RecipeContainer favoriteRecipes={this.state.favoriteRecipes} addFavorite={this.addFavorite} removeFavorite={this.removeFavorite} recipeList={this.state.recipeList}/>
          <FavoritesContainer favoriteRecipes={this.state.favoriteRecipes} removeFavorite={this.removeFavorite} />
        </div>
      </Fragment>
    )
  }
}

export default MainContainer
