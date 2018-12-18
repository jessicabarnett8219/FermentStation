import React, { Component } from "react"
import BatchTypeEditForm from "./BatchTypeEditForm";
import IngredientForm from "../ingredient/IngredientForm"

class BrewingEdit extends Component {

  render() {
    return (
      <div>
        <div className="container">
        <h1 className="text-align-center">Edit Batch</h1>
          <label htmlFor="editName">Name</label>
          <input id="editName" type="text" defaultValue={this.props.batch.name} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <BatchTypeEditForm batchType={this.props.batch.typeId} handleFieldChangeRadio={this.props.handleFieldChangeRadio} typeOptions={this.props.typeOptions} />

          <label htmlFor="editStartDate">Start Date</label>
          <input type="date" id="editStartDate" defaultValue={this.props.batch.startDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editBottleDate">Expected Bottling Date</label>
          <input type="date" id="editBottleDate" defaultValue={this.props.batch.bottleDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label>Starter Ingredients</label>
          <button onClick={() => {
            this.props.history.push(`/ingredients/${this.props.batch.id}`)
          }}>Add More</button>
          <div>
          <ul>
            {
              this.props.starterIngredients.map(ingredientObj => {
                return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                <button className="button-xs" onClick={() => {
                    this.props.deleteIngredient(ingredientObj.id)
                      .then(() => this.props.getStarterIngredients(this.props.batch.id))
                  }}>Delete</button>
                </li>
              })
            }
          </ul>
        </div>

          <div className="flex justify-content-center margin-bottom-s">
            <button className="button info button-border margin-top-xxs" onClick={() => {
              this.props.history.push(`/batches/${this.props.batch.id}`)
            }}>Cancel</button>
            <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
              if (this.props.startDate === "" || this.props.bottleDate === "") {
                alert("Date fields should not be left blank")
              } else {
                this.props.handleSave()
              }
            }}>Save</button>
          </div>
        </div>
      </div>
    )

  }
}

export default BrewingEdit