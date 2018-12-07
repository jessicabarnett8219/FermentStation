import React, { Component } from "react"
import { Grid, Button, Header, List } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import APIManager from "../../../modules/APIManager"



class BottledBatchesList extends Component {
  state = {
    batches: []
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", "/?user=1&status=2")
      .then(batches => this.setState({ batches: batches }))
  }

  render() {
    return (
      <Grid columns={1} padded>
        <Grid.Column>
          <Header as="h1" textAlign="center">Bottled Batches</Header>
          <List divided>
            {
              this.state.batches.map(batch => {
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
              })
            }
          </List>

        </Grid.Column>
      </Grid>
    )
  }
}
export default BottledBatchesList