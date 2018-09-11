import React from 'react'

class WeaponSelector extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>
                {this.props.weapon.name}
            </li>
        )
    }
}

export default WeaponSelector