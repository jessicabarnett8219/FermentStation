import React, { Component } from "react"
import BatchTypeEditForm from "./BatchTypeEditForm";
import BatchRatingEditForm from "./BatchRatingEditForm"

class CompletedEdit extends Component {

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

          <label htmlFor="editBottleDate">Bottled Date</label>
          <input type="date" id="editBottleDate" defaultValue={this.props.batch.bottleDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editCompleteDate">Completion Date</label>
          <input type="date" id="editCompleteDate" defaultValue={this.props.batch.completeDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label>Starter Ingredients</label>
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

          <label>Bottle Ingredients</label>
          <div>
            <ul>
              {
                this.props.bottleIngredients.map(ingredientObj => {
                  return <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient.name}
                    <button className="button-xs" onClick={() => {
                      this.props.deleteIngredient(ingredientObj.id)
                        .then(() => this.props.getBottleIngredients(this.props.batch.id))
                    }}>Delete</button>
                  </li>
                })
              }
            </ul>
          </div>

          <BatchRatingEditForm rating={this.props.batch.rating} handleFieldChangeRating={this.props.handleFieldChangeRating} />

          <label htmlFor="editReview">Review</label>
          <textarea id="editReview" defaultValue={this.props.batch.review} type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <div className="flex justify-content-center">
            <button className="button info button-border margin-top-xxs" onClick={() => {
              this.props.history.push(`/batches/${this.props.batch.id}`)
            }}>Cancel</button>
            <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
              if (this.props.bottleDate === "" || this.props.startDate || this.props.completeDate === "") {
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

export default CompletedEdit