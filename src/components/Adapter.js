class Adapter {
  static fetchRecipes = (term) => {
    return fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${term}`)
    .then(resp => resp.json())
  }
}

export default Adapter;
