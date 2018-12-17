import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"


class TeaSelection extends Component {

  state = {
    teaOptions: [],
    currentTea: 3
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=3")
      .then(options => this.setState({
        teaOptions: options
      }))

  }

  handleIngredientSelection = (evt) => {
    this.setState({ currentTea: parseInt(evt.target.value) })
  }

  render() {
    return (
      <div>
        <label className="select" htmlFor="ingredientId">
          <select id="ingredientId" name="ingredientId" onChange={
                  (evt) => {
                    this.handleIngredientSelection(evt)
                  }
                }>
            {
              this.state.teaOptions.map(tea => {
                return <option key={tea.id} value={tea.id} >
                  {tea.name}
                </option>
              })
            }
          </select>
        </label>
      </div>

    )
  }
}

export default TeaSelection