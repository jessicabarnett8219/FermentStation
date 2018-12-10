import React, { Component } from "react"
import { Grid, Button, Header, List, Form, Input, FormField } from 'semantic-ui-react'
// import { Link } from "react-router-dom"

// TODO fix radio pre-population

class BottledEdit extends Component {


  render() {
    return (
      <div>
        <Form>
          <Form.Input id="editName" fluid label="Batch Name" type="text" defaultValue={this.props.batch.name} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <FormField>
            <label>Type</label>
            <label htmlFor="waterKefir">Water Kefir</label>
            <input type="radio" name="editType" value={2} onChange={(evt) => {
              this.props.handleFieldChangeRadio(evt)
            }} />
            <label htmlFor="kombucha">Kombucha</label>
            <input type="radio" name="editType" value={1} onChange={(evt) => {
              this.props.handleFieldChangeRadio(evt)
            }} />
          </FormField>

          <label htmlFor="editStartDate">Start Date</label>
          <input type="date" id="editStartDate" defaultValue={this.props.batch.startDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editBottleDate">Bottling Date</label>
          <input type="date" id="editBottleDate" defaultValue={this.props.batch.bottleDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editCompleteDate">Expected Completion Date</label>
          <input type="date" id="editCompleteDate" defaultValue={this.props.batch.completeDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label>Amount</label>
          <Form.Input id="editAmount" type="text" defaultValue={this.props.batch.batchAmount} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <select id="editMeasurement" defaultValue={this.props.batch.measurement} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } >
            <option value="cups">Cups</option>
            <option value="ounces">Ounces</option>
          </select>

          <Form.Input id="editStarterIngredients" defaultValue={this.props.batch.starterIngredients} label="Starter Ingredients" type="text" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <Form.Input id="editBottleIngredients" defaultValue={this.props.batch.bottleIngredients} label="Bottle Ingredients" type="text" onChange={
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

export default BottledEdit