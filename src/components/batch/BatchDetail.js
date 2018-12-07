import React, { Component } from "react"
import { Grid, Button, Header, List } from 'semantic-ui-react'
import APIManager from "../../modules/APIManager"
import { Link } from "react-router-dom"



class BatchDetail extends Component {

  state = {
    batch: "",
    initialized: false
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    APIManager.getEntry("batches", batchId)
    .then(batchObj => {
      this.setState({batch: batchObj}, () => this.setState({initialized: true}, () => console.log(this.state)))
    })
  }

  render() {
    if(this.state.initialized === true) {
        if (this.state.batch.status === 1) {
          return (
            <Grid columns={1} padded={true}>
              <Grid.Column>
                <Header as="h1" textAlign="center">Batch Details</Header>
                <List>
                  <List.Item>
                    <List.Content ><Header size="medium">Name</Header>{this.state.batch.name}</List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content><Header size="medium">Type</Header>{this.state.batch.type}</List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content><Header size="medium">Brewing Since</Header>{this.state.batch.startDate}</List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content><Header size="medium">Ingredients</Header>{this.state.batch.ingredients}</List.Content>
                  </List.Item>

                </List>
                <Grid.Row>
                  <Link to={`/bottle/${this.state.batch.id}`}><Button>Bottle Batch</Button></Link>
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
        } else if (this.state.batch.status === 2) {
          return (
            <Grid columns={1} padded={true}>
              <Grid.Column>
                <Header as="h1" textAlign="center">Batch Details</Header>
                <List>
                  <List.Item>
                    <List.Content ><Header size="medium">Name</Header>{this.state.batch.name}</List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content><Header size="medium">Type</Header>{this.state.batch.type}</List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content><Header size="medium">Bottled Since</Header>{this.state.batch.bottleDate}</List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content><Header size="medium">Ingredients</Header>{this.state.batch.ingredients}</List.Content>
                  </List.Item>

                </List>

                <Grid.Row>
                  <Link to={`/review/${this.state.batch.id}`}><Button>Review Batch</Button></Link>
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
        } else if (this.state.batch.status === 3){
          return (
            <div>
              <h1>Hello</h1>
            </div>
          )
        }
    } else {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      )
    }

  }

}
export default BatchDetail