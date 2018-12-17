import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"


class SugarSelection extends Component {

  state = {
    sugarOptions: []
  }

  componentDidMount() {
    APIManager.getAllEntries("ingredients", "?categoryId=1")
      .then(options => this.setState({
        sugarOptions: options
      }))

  }
  render() {
    return (
      <div>
        <label className="select" htmlFor="currentSugar">
          <select id="currentSugar" name="currentSugar" onChange={
                  (evt) => {
                    this.props.handleIngredientSelection(evt)
                  }
                }>
            {
              this.state.sugarOptions.map(sugar => {
                return <option key={sugar.id} value={sugar.id} >
                  {sugar.name}
                </option>
              })
            }
          </select>
        </label>
      </div>

    )
  }
}

export default SugarSelection