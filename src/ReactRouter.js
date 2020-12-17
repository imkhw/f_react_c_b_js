import React from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import Team from './routes/Team'
import Error from './routes/Error'
import Nav from './routes/Nav'
import Teammates from './routes/Teammates'

const ReactRouter = () => {
    return (
        <Router>
            <h4>React router</h4>
            <Nav /> 
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/team'>
                    <Team />
                </Route>
                <Route path='/teammates/:id' children={<Teammates />}>
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouter
