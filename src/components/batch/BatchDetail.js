import React, { Component } from "react"
import { Grid, Button, Header, List } from 'semantic-ui-react'
import APIManager from "../../modules/APIManager"
import { Link } from "react-router-dom"



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
    const {batchId} = this.props.match.params
    APIManager.getEntry("batches", batchId, "/?_expand=type")
    .then(batch => this.setState({
      batchName: batch.name,
      startDate: batch.startDate,
      type: batch.type.name,
      ingredients: batch.ingredients,
      batchId: batch.id
    }))
  }

  render() {

    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Batch Details</Header>
          <List>
            <List.Item>
              <List.Content ><Header size="medium">Name</Header>{this.state.batchName}</List.Content>
            </List.Item>

            <List.Item>
              <List.Content><Header size="medium">Type</Header>{this.state.type}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content><Header size="medium">Brewing Since</Header>{this.state.startDate}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content><Header size="medium">Ingredients</Header>{this.state.ingredients}</List.Content>
            </List.Item>
          </List>
          <Grid.Row>
            <Link to={`/bottle/${this.state.batchId}`}><Button>Bottle Batch</Button></Link>
          </Grid.Row>
          <Grid.Row>
          <Link to={`/review/${this.state.batchId}`}><Button>Review Batch</Button></Link>
          </Grid.Row>
          <Grid.Row>
            <Button>Edit Batch</Button>
          </Grid.Row>
          <Grid.Row>
            <Button>Delete Batch</Button>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    )
  }
}
export default BatchDetail