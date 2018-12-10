import React, { Component } from "react"
import { Grid, Form, Button, Header } from 'semantic-ui-react'
import "../../FermentStation.css"
import APIManager from "../../../modules/APIManager"


class BottleForm extends Component {

  state = {
    batch: "",
    bottleDate: "",
    completeDate: "",
    bottleIngredients: "",
    batchId: ""
  }

  componentDidMount() {
    const {batchId} = this.props.match.params
    this.setState({batchId: batchId})
    APIManager.getEntry("batches", batchId)
    .then(batch => {
      this.setState({
        batch: batch
      })
    })
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructBottledBatch = (evt) => {
    const bottledBatch = {
      bottleDate: this.state.bottleDate,
      completeDate: this.state.completeDate,
      bottleIngredients: this.state.bottleIngredients,
      status: 2
    }
    return bottledBatch
  }


  handleSave = () => {
    let bottledBatch = this.constructBottledBatch()
    APIManager.editEntry("batches", this.state.batchId, bottledBatch)
      .then(() => {
        this.props.history.push(`/batches/${this.state.batchId}`)
      })

  }

  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
            <Header as="h1" textAlign="center">Bottle {this.state.batchName}<Header.Subheader>Brewing Since: {this.state.batch.startDate}</Header.Subheader></Header>
            <Form>
              <Form.Input fluid label="Bottling Date" type="date" id="bottleDate" onChange={(evt) => {
                this.handleFieldChange(evt)
              }}/>
              <Form.Input fluid label="Expected Completion Date" type="date" id="completeDate" onChange={(evt) => {
                this.handleFieldChange(evt)
              }}/>
              <Form.Input label="Bottle Ingredients" type="text" id="bottleIngredients" onChange={(evt) => {
                this.handleFieldChange(evt)
              }}/>
              <Button onClick={
              () => {
                this.props.history.push(`/batches/${this.state.batchId}`)
              }
            }>Cancel</Button>
              <Button onClick={() => {
                this.handleSave()
              }}>Save</Button>
            </Form>
        </Grid.Column>
      </Grid>
        )
      }
    }
export default BottleForm