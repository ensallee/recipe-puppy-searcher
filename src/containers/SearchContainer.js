import React, { Fragment, Component } from 'react'
import SearchBar from '../components/SearchBar'
import RecipeContainer from './RecipeContainer'
import Adapter from '../components/Adapter'
import  { debounce } from 'lodash';

class SearchContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      searchTerm: '',
      // typing: false,
      // typingTimeout: null,
      recipeList: []
    }
  }

  // handleChange = (event) => {
  //   // if (this.state.typingTimeOut) {
  //   //   clearTimeout(this.state.typingTimeOut);
  //   //   console.log('state after clearing timeout', this.state.typingTimeOut)
  //   // }
  //   clearTimeout(this.state.typingTimeout)
  //
  //   this.setState({
  //      searchTerm: event.target.value,
  //      typing: true,
  //      typingTimeout: setTimeout(() => {
  //          this.fetchRecipes(this.state.searchTerm);
  //        }, 3000)
  //   }, () => console.log('state after typing', this.state));
  // }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => this.raiseFetchRecipesWhenUserStopsTyping())
  }

  raiseFetchRecipesWhenUserStopsTyping = debounce(
    () => {
      this.fetchRecipes(this.state.searchTerm);
    }, 400);

  fetchRecipes(term) {
    if (term === '') {
      this.setState({
        recipeList: []
      })
    } else {
      Adapter.fetchRecipes(term)
      .then(data => this.setState({
        recipeList: data.results
      }, () => console.log('state after search', this.state.recipeList)))
    }
  }

  render() {
    return (
      <Fragment>
        <SearchBar searchTerm={this.state.searchTerm} recipeList={this.state.recipeList} handleChange={this.handleChange} />
        <RecipeContainer recipeList={this.state.recipeList}/>
      </Fragment>
    )
  }
}

export default SearchContainer
