import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"


class IngredientSelection extends Component {

  state = {
    ingredientOptions: []
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=1")
      .then(options => this.setState({
        ingredientOptions: options
      }))

  }
  render() {
    return (
      <div>
        <label className="select" htmlFor="ingredientId">
          <select id="ingredientId" name="ingredientId" onChange={
                  (evt) => {
                    this.props.handleFieldChange(evt)
                  }
                }>
            {
              this.state.ingredientOptions.map(ingredient => {
                return <option key={ingredient.id} value={ingredient.id} >
                  {ingredient.name}
                </option>
              })
            }
          </select>
        </label>
      </div>

    )
  }
}

export default IngredientSelection