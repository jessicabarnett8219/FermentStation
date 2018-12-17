import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BrewingDetail from "./BrewingDetail"
import BottledDetail from "./BottledDetail";
import CompletedDetail from "./CompletedDetail"
import NavBar from "../../navigation/NavBar"


class BatchDetail extends Component {

  state = {
    batch: {},
    initialized: false,
    currentUser: "",
    starterIngredients: []
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    const currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId }, () => {
      APIManager.getEntry("batches", batchId, "?_expand=type")
        .then(batchObj => {
          this.setState({ batch: batchObj, initialized: true })
        })
    })
    APIManager.getAllEntries("batches-ingredients", `?batchId=${batchId}&_expand=ingredient`)
    .then(ingredients => this.setState({starterIngredients: ingredients}))
  }

  handleDelete = () => {
    APIManager.deleteEntry("batches", this.state.batch.id)
      .then(() => {
        if (this.state.batch.status === 1) {
          this.props.history.push("/in-progress-list")
        } else if (this.state.batch.status === 2) {
          this.props.history.push("/in-progress-list")
        } else {
          this.props.history.push("/completed-list")
        }
      })
  }


  render() {
    if (this.state.initialized === true) {
      if (this.state.batch.status === 1) {
        return (
          <div>
            <NavBar {...this.props}/>
            <BrewingDetail {...this.state.batch} handleDelete={this.handleDelete} {...this.props} starterIngredients={this.state.starterIngredients}/>
          </div>
        )
      } else if (this.state.batch.status === 2) {
        return (
          <div>
            <NavBar {...this.props}/>
            <BottledDetail {...this.state.batch} {...this.props} handleDelete={this.handleDelete} {...this.props} />
          </div>
        )
      }
      else if (this.state.batch.status === 3) {
        return (
          <div>
            <NavBar {...this.props}/>
            <CompletedDetail {...this.state.batch} {...this.props} handleDelete={this.handleDelete} {...this.props} />
          </div>
        )
      }
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }
}
export default BatchDetail