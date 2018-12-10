import React, { Component } from "react"
import { Grid, Button, Header, List } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import APIManager from "../../../modules/APIManager"



class InProgressBatchesList extends Component {
  state = {
    batches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId"),
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}`)
      .then(usersBatches => {
       return usersBatches.filter(batch => {
          return batch.status === 1 || batch.status === 2
        })
      })
      .then(filteredBatches => this.setState({batches: filteredBatches}))
  }

  render() {
    return (
      <Grid columns={1} padded>
        <Grid.Column>
          <Header as="h1" textAlign="center">In-Progress Batches</Header>
          <List divided>
            {
              this.state.batches.map(batch => {
                if(batch.status === 1) {
                  return <List.Item key={batch.id}>
                  <List.Content floated='right'>
                    <Link to={`/batches/${batch.id}`} {...this.props}><Button>Details</Button></Link>
                  </List.Content>
                  <List.Content>
                    <Header size="medium">{batch.name}
                      <Header.Subheader>Brewing Since: {batch.startDate}</Header.Subheader>
                    </Header>
                  </List.Content>
                </List.Item>
                } else if (batch.status === 2 ) {
                  return <List.Item key={batch.id}>
                  <List.Content floated='right'>
                    <Link to={`/batches/${batch.id}`} {...this.props}><Button>Details</Button></Link>
                  </List.Content>
                  <List.Content>
                    <Header size="medium">{batch.name}
                      <Header.Subheader>Bottled Since: {batch.bottleDate}</Header.Subheader>
                    </Header>
                  </List.Content>
                </List.Item>
                }

              })
            }
          </List>

        </Grid.Column>
      </Grid>
    )
  }
}
export default InProgressBatchesList