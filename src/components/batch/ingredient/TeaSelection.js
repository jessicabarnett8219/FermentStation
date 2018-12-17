import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"


class TeaSelection extends Component {

  state = {
    teaOptions: [],
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=3")
      .then(options => this.setState({
        teaOptions: options
      }))

  }


  render() {
    return (
      <div>
        <label className="select" htmlFor="currentTea">
          <select id="currentTea" name="currentTea" onChange={
                  (evt) => {
                    this.props.handleIngredientSelection(evt)
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