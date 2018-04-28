import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {setRecipes} from '../actions';

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state ={
      ingredients: '',
      dish: ''
    }
  }
 search() {
   let { ingredients, dish } = this.state
   const url = `http://wwwrecipepuppy.com/api/?i=${ingredients}&q=${dish}`
// want to convert the response data into json
//using promise
   fetch(url, {method:
  'GET'
})
  .then(response => response.json())
  .then(json =>this.props.setRecipes(json.results)('recipes', json));
 }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <controlLabel>Ingredients</controlLabel>
          {' '}
          <FormControl type="text" placeholder="garlic, chicken" 
          onChange={event => this.setState({ingredients: event.target.value})}/>
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Dish</ControlLabel>
            {' '}
              <FormControl type="text" placeholder="adobo" 
              onChange={event => this.setState({dish: event.target.value})}
              />
          </FormGroup>
          {' '}
          <Button onClick={() =>this.search()}>Submit</Button>
      </Form>
    )
  }
}

export default connect (null, {setRecipes})(SearchRecipes);