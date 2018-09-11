import React from 'react'

class RosterWeapon extends React.Component {
    constructor() {
        super();

        this.removeWeapon = this.removeWeapon.bind(this);
    }

    removeWeapon() {
        this.props.removeWeaponHandler(this.props.weapon);
    }

    render() {
        return (
            <li>
                {this.props.weapon.name} &nbsp;
                <button onClick={this.removeWeapon}>Remove</button>
            </li>
        )
    }
}

export default RosterWeapon