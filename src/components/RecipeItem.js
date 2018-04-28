import React, { Component } from "react";
import { connect } from 'react-redux';
import {favouriteRecipe } from '../actions';

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;
    return (
      <div className="recipe-item">
        <div 
        className='star'
        onClick={() =>this.props.favouriteRecipe(recipe)}>
          &#9734;
        </div>
        <div className="receipe-text">
          <a href={recipe.href}>
            <h4>
              {recipe.title}
            </h4>
          </a>
          <p>
            {}receipe.ingredients
          </p>
        </div>
        <img
          src={recipe.thumbnail}
          alt={recipe.title}
          className="receipe-img"
        />
      </div>
    );
  }
}
export default connect  (null, { favouriteRecipe}) (RecipeItem);
