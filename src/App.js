import React from 'react'
import UnitList from './UnitList'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            units: []
        }
    }

    componentDidMount() {
        fetch("units.json")
            .then(response => response.json())
            .then(json => {this.setState({units: json})})
            .catch(error => console.log(error));
    }

    render() {
        return <UnitList units={this.state.units} />
    }
}

export default App