import React from 'react'

class CreateWeapon extends React.Component {
    render() {
        return (
            <div>
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

                <button className="button">Submit</button>
            </div>
        )
    }
}

export default CreateWeapon;