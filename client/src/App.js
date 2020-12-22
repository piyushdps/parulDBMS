import React from 'react'
import LandingPage from './LandingPage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <LandingPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
