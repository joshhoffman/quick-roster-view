import React from 'react'

class AdminWeapon extends React.Component {
    constructor() {
        super();

        this.addHandler = this.addHandler.bind(this);
    }

    addHandler() {
        this.props.addHandler(this.props.weapon);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.weapon.name}
                </div>
                <div className="col-md-1">
                    <button onClick={this.addHandler}>Add</button>
                </div>
            </div>
        )
    }
}

export default AdminWeapon