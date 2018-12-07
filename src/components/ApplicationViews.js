import { Route, Redirect } from "react-router-dom"
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

  isAuthenticated = () => (sessionStorage.getItem("userId") !== null || localStorage.getItem("userId") !== null)

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
          if(this.isAuthenticated()) {
            return <MainMenu {...props}/>
          } else {
            return <Redirect to="/welcome" />
          }
        }} />
        <Route path="/welcome" render={props => {
          return <WelcomeScreen {...props}/>
        }} />
        <Route path="/new-batch" render={props => {
          if(this.isAuthenticated()) {
            return <NewBatchForm />
          } else {
            return <Redirect to="/welcome" />
          }
        }} />
        <Route path="/bottled-list" render={props => {
          if(this.isAuthenticated()) {
            return <BottledBatchesList />
          } else {
            return <Redirect to="/welcome" />
          }
        }} />
        <Route path="/brewing-list" render={props => {
          if(this.isAuthenticated()) {
            return <BrewingBatchesList />
          } else {
            return <Redirect to="/welcome" />
          }
        }} />
        <Route path="/completed-list" render={props => {
          if(this.isAuthenticated()) {
            return <PastBatchesList />
          } else {
            return <Redirect to="/welcome" />
          }
        }} />
        <Route exact path="/batches" render={props => {
          if(this.isAuthenticated()) {
            return (
            <div></div>)
          } else {
            return <Redirect to="/welcome" />
          }
        }} />
        <Route path="/batches/:batchId(\d+)" component={BatchDetail}/>
        <Route path="/bottle/:batchId(\d+)" component={BottleForm}/>
        <Route path="/review/:batchId(\d+)" component={ReviewForm}/>

      </React.Fragment>

    )
  }
}

export default ApplicationViews