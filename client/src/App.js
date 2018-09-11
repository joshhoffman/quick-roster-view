import React, {Component} from 'react'
import Builder from './Builder'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <div>
                <header>
                    Quick View
                    <nav>
                        <ul>
                            <li><Link to='/'>Builder</Link></li>
                            <li>Admin</li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path='/' component={Builder}/>
                </Switch>
            </div>
        )
    }
}

export default App