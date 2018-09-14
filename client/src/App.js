import React, {Component} from 'react'
import Builder from './Builder'
import Admin from './Admin'
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
                            <li><Link to='/admin'>Admin</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path='/' component={Builder}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>
            </div>
        )
    }
}

export default App