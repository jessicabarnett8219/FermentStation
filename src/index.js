import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import "turretcss/dist/turretcss.min.css"
import "./index.css"
import FermentStation from './components/FermentStation'



ReactDOM.render(
    <Router>
        <FermentStation />
    </Router>
    , document.getElementById('root'))


