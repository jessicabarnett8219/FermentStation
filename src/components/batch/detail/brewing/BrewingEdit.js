import React, { Component } from "react"
import { Grid, Button, Header, List, Form , Input} from 'semantic-ui-react'
// import { Link } from "react-router-dom"

// TODO Fix on Change issue, bug with input not saving on dates is fixed when taking out Semantic UI component
class BrewingEdit extends Component {


  state = {
    editName: "",
    editStartDate: "",
    editBottleDate: "",
    editStarterIngredients: ""
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Input id="editName" fluid label="Batch Name" type="text" defaultValue={this.props.batch.name} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label for="editStartDate">Start Date</label>
          <input type="date" id="editStartDate" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label for="editBottleDate">Expected Bottling Date</label>
          <input type="date" id="editBottleDate" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <Form.Input id="editStarterIngredients" defaultValue={this.props.batch.starterIngredients} label="Starter Ingredients" type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />
        </Form>
        <Button onClick={() => {
          this.props.handleSave()
        }}>Save</Button>
        <Button>Cancel</Button>
      </div>
    )

  }
}

export default BrewingEdit