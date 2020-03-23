import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import One from "./containers/One/One"

class App extends Component {
    render() {
        return (
            <Layout>
                <One/>
            </Layout>
        )
    }
}

export default App
