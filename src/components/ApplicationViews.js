import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import MainMenu from "./navigation/dashboard/MainMenu"
import WelcomeScreen from "./authentication/WelcomeScreen"
import BrewingBatchesList from "./batch/list/BrewingBatchesList"
import BottledBatchesList from "./batch/list/BottledBatchesList"
import PastBatchesList from "./batch/list/PastBatchesList"
import NewBatchForm from "./batch/form/NewBatchForm"
import BatchDetail from "./batch/BatchDetail";



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
          return <MainMenu />
        }} />
        <Route path="/welcome" render={props => {
          return <WelcomeScreen />
        }} />
        <Route path="/new-batch" render={props => {
          return <NewBatchForm />
        }} />
        <Route path="/bottled-list" render={props => {
          return <BottledBatchesList />
        }} />
        <Route path="/brewing-list" render={props => {
          return <BrewingBatchesList />
        }} />
        <Route path="/past-list" render={props => {
          return <PastBatchesList />
        }} />
        <Route path="/batches/:batchId(\d+)" render={props => {
          return <BatchDetail />
        }} />

      </React.Fragment>

    )
  }
}

export default ApplicationViews