import React from 'react'

class CreateWeapon extends React.Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const newWeapon = {
            name: data.get("name"),
            type: data.get("type"),
            range: data.get("range"),
            strength: data.get("strength"),
            ap: data.get("ap"),
            damage: data.get("damage")
        };

        console.log("submit", data.get("name"));
        document.getElementById("unit-form").reset();

        this.props.createWeaponHandler(newWeapon);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} id="weapon-form">
                <div className="row">
                    <div className="col-md-3">Name</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-3">Type</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-3">Range</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-3">Strength</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-3">Ap</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-3">Damage</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>

                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateWeapon;