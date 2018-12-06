import React, { Component } from "react"
import BottledDetail from "../detail/BottledDetail"

class BottledBatchesList extends Component {
  render() {
    return(
      <div>
        <h3>Bottled Batches List Here</h3>
        <button onClick={() => {
          return <BottledDetail />
        }}>See More</button>
      </div>
    )
  }
}
export default BottledBatchesList