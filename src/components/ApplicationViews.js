import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import MainMenu from "./navigation/MainMenu"
import WelcomeScreen from "./authentication/WelcomeScreen"
import InProgressBatchesList from "./batch/list/InProgressBatchesList"
import CompletedBatchesList from "./batch/list/CompletedBatchesList"
import NewBatchForm from "./batch/form/NewBatchForm"
import BatchDetail from "./batch/detail/BatchDetail";
import BottleForm from "./batch/form/BottleForm"
import ReviewForm from "./batch/form/ReviewForm";
import EditBatch from "./batch/detail/EditBatch"




class ApplicationViews extends Component {

  isAuthenticated = () => (sessionStorage.getItem("userId") !== null || localStorage.getItem("userId") !== null)

  render() {
    return (
      <div className="page-container">
        <Route exact path="/" render={props => {
          if (this.isAuthenticated()) {
            return <MainMenu {...props} />
          } else {
            return <Redirect to="/welcome" />
          }
        }} />
        <Route path="/welcome" render={props => {
          return <WelcomeScreen {...props} />
        }} />
        <Route path="/new-batch" render={props => {
          if (this.isAuthenticated()) {
            return <NewBatchForm {...props} />
          } else {
            return <Redirect to="/welcome" />
          }
        }} />
        <Route path="/completed-list" render={props => {
          if (this.isAuthenticated()) {
            return <CompletedBatchesList />
          } else {
            return <Redirect to="/welcome" />
          }
        }} />
        <Route path="/in-progress-list" render={props => {
          if (this.isAuthenticated()) {
            return <InProgressBatchesList />
          } else {
            return <Redirect to="/welcome" />
          }
        }} />

        <Route path="/batches/:batchId(\d+)" component={BatchDetail} />
        <Route path="/batches/edit/:batchId(\d+)" component={EditBatch} />
        <Route path="/bottle/:batchId(\d+)" component={BottleForm} />
        <Route path="/review/:batchId(\d+)" component={ReviewForm} />

     </div>

    )
  }
}

export default ApplicationViews