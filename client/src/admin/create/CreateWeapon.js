import React from 'react'
import TextInputField from "./TextInputField";

class CreateWeapon extends React.Component {
    constructor() {
        super();

        this.properties = [
            "Name",
            "Type",
            "Range",
            "Strength",
            "AP",
            "Damage",
            "Points"
        ];

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
            damage: data.get("damage"),
            points: data.get("points")
        };

        document.getElementById("unit-form").reset();

        this.props.createWeaponHandler(newWeapon);
    }

    render() {
        const fields = [];

        for (const field of this.properties) {
            fields.push(<TextInputField key={field} name={field}/>)
        }

        return (
            <div>
                <form onSubmit={this.onSubmit} id="weapon-form">
                    {fields}

                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateWeapon;