import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import MainMenu from "./navigation/dashboard/MainMenu"
import WelcomeScreen from "./authentication/WelcomeScreen"
import BrewingBatchesList from "./batch/list/BrewingBatchesList"
import BottledBatchesList from "./batch/list/BottledBatchesList"
import PastBatchesList from "./batch/list/PastBatchesList"
import NewBatchForm from "./batch/form/NewBatchForm"
import BatchDetail from "./batch/BatchDetail";
import BottleForm from "./batch/form/BottleForm"
import SampleForm from "./batch/form/SampleForm";



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
        <Route path="/batches/1" render={props => {
          return <BatchDetail />
        }} />
        <Route path="/bottle-batch" render={props => {
          return <BottleForm />
        }} />
        <Route path="/sample-batch" render={props => {
          return <SampleForm />
        }}/>

      </React.Fragment>

    )
  }
}

export default ApplicationViews