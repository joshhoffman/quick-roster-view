import React from 'react'

class AdminWeapon extends React.Component {
    render() {
        return (
            <div key={this.props.weapon.name}>
                {this.props.weapon.name}
            </div>
        )
    }
}

export default AdminWeapon