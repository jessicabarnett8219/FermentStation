import { Route } from "react-router-dom"
import React, { Component } from "react"
import MainMenu from "./navigation/dashboard/MainMenu"
import WelcomeScreen from "./authentication/WelcomeScreen"
import BrewingBatchesList from "./batch/list/BrewingBatchesList"
import BottledBatchesList from "./batch/list/BottledBatchesList"
import PastBatchesList from "./batch/list/CompleteBatchesList"
import NewBatchForm from "./batch/form/NewBatchForm"
import BatchDetail from "./batch/detail/BatchDetail";
import BottleForm from "./batch/form/BottleForm"
import ReviewForm from "./batch/form/ReviewForm";



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
        <Route path="/completed-list" render={props => {
          return <PastBatchesList />
        }} />
        <Route path="/batches/:batchId(\d+)" component={BatchDetail}/>
        <Route path="/bottle/:batchId(\d+)" component={BottleForm}/>
        <Route path="/review/:batchId(\d+)" component={ReviewForm}/>

      </React.Fragment>

    )
  }
}

export default ApplicationViews