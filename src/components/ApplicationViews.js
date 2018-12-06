import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import MainMenu from "./navigation/dashboard/MainMenu"
import WelcomeScreen from "./authentication/WelcomeScreen"
import BrewingBatchesList from "./batch/list/BrewingBatchesList"
import BottledBatchesList from "./batch/list/BottledBatchesList"
import PastBatchesList from "./batch/list/PastBatchesList"
import NewBatchForm from "./batch/form/NewBatchForm"



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
          return <MainMenu />
        }} />
        <Route path="/welcome" render={props => {
            return <WelcomeScreen />
        }}/>
        <Route path="/new-batch" render={props => {
          return <NewBatchForm />
        }} />
        <Route path="/batches" />
        <Route path="/batches/:batchId(\d+)" />


        <Route path="/brewing-batches" render={props => {
          return <BrewingBatchesList />
        }} />
        <Route path="/brewing-batches/:batchId(\d+)" />
        <Route path="/bottled-batches" render={props => {
          return <BottledBatchesList />
        }}/>
        <Route path="/past-batches" render={props => {
          return <PastBatchesList />
        }}/>
      </React.Fragment>



    )
  }
}

export default ApplicationViews