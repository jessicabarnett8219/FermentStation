import React, { Component } from "react"
import { Grid, Button, Header, Item, List } from 'semantic-ui-react'
import APIManager from "../../modules/APIManager"



class BatchDetail extends Component {

  state = {
    batchName: "",
    startDate:"",
    bottleDate: "",
    completeDate: "",
    type: "",
    status: "",
    ingredients: ""
  }

  componentDidMount () {
    APIManager.getEntry("batches", `${this.props.batchId}`)
    .then(batch => {
      this.setState({
        batchName: batch.name,
        startDate: batch.startDate,
        type: batch.type,
        status: batch.status,
        ingredients: batch.ingredients
      }, () => console.log(this.state))
    })

  }

  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Batch Details</Header>
          <List>
            <List.Item>
              <List.Content ><Header size="medium">Name</Header>Grape Soda</List.Content>
            </List.Item>

            <List.Item>
              <List.Content><Header size="medium">Type</Header>Water Kefir</List.Content>
            </List.Item>
            <List.Item>
              <List.Content><Header size="medium">Brewing Since</Header>12/05/2017</List.Content>
            </List.Item>
            <List.Item>
              <List.Content><Header size="medium">Ingredients</Header>2 cups palm sugar</List.Content>
            </List.Item>
          </List>
          <Button fluid>Bottle Batch</Button>
          <Button fluid>Edit Batch</Button>
          <Button fluid>Delete Batch</Button>
        </Grid.Column>
      </Grid>
    )
  }
}
export default BatchDetail