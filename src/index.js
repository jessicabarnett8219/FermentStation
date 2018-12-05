import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import FermentStation from './components/FermentStation'


ReactDOM.render(
    <Router>
        <FermentStation />
    </Router>
    , document.getElementById('root'))


