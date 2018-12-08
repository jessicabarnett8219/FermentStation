import React, { Component } from "react"
import { Grid, Button, Header, List , Form} from 'semantic-ui-react'
import { Link } from "react-router-dom"

// TODO Fix on Change issue
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

          <Form.Input id="editStartDate" fluid label="Start Date" type="date" selected={this.props.batch.startDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <Form.Input id="editBottleDate" selected={this.props.batch.bottleDate} fluid label="Expected Bottling Date" type="date" onChange={
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