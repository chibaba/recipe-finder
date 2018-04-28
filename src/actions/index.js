//define first action type
export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE= 'FAVOURITE_RECIPE';

export function setRecipes(items) {
  //will return object of type field set to object receipe is constant
  return  {
    type: SET_RECIPES,
    items
  }
}
export function favouriteRecipe(recipe) {
  return {
    type: FAVORITE_RECIPE,
    recipe
  }
}
