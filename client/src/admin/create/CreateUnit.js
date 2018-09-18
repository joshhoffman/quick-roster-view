import React from 'react';
import TextInputField from './TextInputField'

class CreateUnit extends React.Component {
    constructor() {
        super();

        this.properties = [
            "Name",
            "Move",
            "Weapon Skill",
            "Ballistic Skill",
            "Strength",
            "Toughness",
            "Wounds",
            "Attacks",
            "Leadership",
            "Save",
            "Points"
        ];

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const newUnit = {
            name: data.get("name"),
            move: data.get("move"),
            weaponSkill: data.get("weapon-skill"),
            ballisticSkill: data.get("ballistic-skill"),
            strength: data.get("strength"),
            toughness: data.get("toughness"),
            wounds: data.get("wounds"),
            attacks: data.get("attacks"),
            leadership: data.get("leadership"),
            save: data.get("save"),
            points: data.get("points"),
            weapons: [1, 2]
        };

        document.getElementById("unit-form").reset();

        this.props.createUnitHandler(newUnit);
    }

    render() {
        const fields = [];

        for (const field of this.properties) {
            fields.push(<TextInputField key={field} name={field}/>)
        }

        return (
            <div>
                <form onSubmit={this.onSubmit} id="unit-form">
                    {fields}
                Weapons<br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateUnit