import React from 'react';

class CreateUnit extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">Name</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Move</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Weapon Skill</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Ballistic Skill</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Strength</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Toughness</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Wounds</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Attacks</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Leadership</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">Save</div>
                    <div className="col-md-4"><input type="text"/></div>
                </div>
                Weapons<br />
                <button>Submit</button>
            </div>
        )
    }
}

export default CreateUnit