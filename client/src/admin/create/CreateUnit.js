import React from 'react';

class CreateUnit extends React.Component {
    constructor() {
        super();

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
            weapons: [1, 2]
        };

        console.log("submit", data.get("name"));
        document.getElementById("unit-form").reset();

        this.props.createUnitHandler(newUnit);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} id="unit-form">
                <div className="row">
                    <div className="col-md-4">Name</div>
                    <div className="col-md-4"><input type="text" id="name" name="name" required/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Move</div>
                    <div className="col-md-4"><input type="text" id="move" name="move" required/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Weapon Skill</div>
                    <div className="col-md-4"><input type="text" id="weapon-skill" name="weapon-skill" required/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Ballistic Skill</div>
                    <div className="col-md-4"><input type="text" id="ballistic-skill" name="ballistic-skill" required/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Strength</div>
                    <div className="col-md-4"><input type="text" id="strength" name="strength" required/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Toughness</div>
                    <div className="col-md-4"><input type="text" id="toughness" name="toughness" required/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Wounds</div>
                    <div className="col-md-4"><input type="text" id="wounds" name="wounds" required/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Attacks</div>
                    <div className="col-md-4"><input type="text" id="attacks" name="attacks" required/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Leadership</div>
                    <div className="col-md-4"><input type="text" id="leadership" name="leadership" required/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Save</div>
                    <div className="col-md-4"><input type="text" id="save" name="save" required/></div>
                </div>
                Weapons<br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateUnit