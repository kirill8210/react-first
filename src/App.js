import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import {Route, Switch, Redirect} from 'react-router-dom'
import One from "./containers/One/One"
import OneList from "./containers/OneList/OneList"
import Auth from "./containers/Auth/Auth"
import OneCreator from "./containers/OneCreator/OneCreator"

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/auth" component={Auth}/>
                    <Route path="/one-creator" component={OneCreator}/>
                    <Route path="/one/:id" component={One}/>
                    <Route path="/" component={OneList}/>
                    <Redirect to={'/'}/>
                </Switch>
            </Layout>
        )
    }
}

export default App
