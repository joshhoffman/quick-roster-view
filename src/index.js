import React from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World 2!</div>
        )
    }
}

class HelloUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'tylermcginnis'
        };

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        return (
            <div>
                Hello {this.state.username} <br />
                Change Name:
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

ReactDOM.render(<HelloUser />, document.getElementById('root'));

/////

class HelloUser2 extends React.Component {
    render() {
        return (
            <div> Hello, {this.props.name}</div>
        )
    }
}

ReactDOM.render(<HelloUser2 name="Tyler"/>, document.getElementById('root'));



class FriendsContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tyler McGinnis',
            friends: [
                'test1',
                'test2',
                'test3'
                // {key: 1, name: 'Jake Lingwall'},
                // {key: 2, name: 'Sarah Drasner'},
                // {key: 3, name: 'Merrick Christensen'}
            ],
        };

        this.addFriend = this.addFriend.bind(this)
    }
    componentDidMount(){
        // Invoked once the component is mounted to the DOM
        // Good for making AJAX requests
        fetch('https://randomuser.me/api/?results=500')
            .then(results => {
                console.log(results);
                return results;
            })
    }
    componentWillUnmount(){
        // Called IMMEDIATELY before a component is unmounted
        // Good for cleaning up listeners
    }
    addFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
    }
    render() {
        return (
            <div>
                <h3> Name: {this.state.name} </h3>
                <AddFriend addNew={this.addFriend} />
                <ShowList names={this.state.friends} />
            </div>
        )
    }
}

class AddFriend extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newFriend: ''
        }

        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }
    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }
    handleAddNew() {
        this.props.addNew(this.state.newFriend)
        this.setState({
            newFriend: ''
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.newFriend}
                    onChange={this.updateNewFriend}
                />
                <button onClick={this.handleAddNew}> Add Friend </button>
            </div>
        )
    }
}

class ShowList extends React.Component {
    render() {
        return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {this.props.names.map((friend) => <li>{friend}</li>)}
                </ul>
            </div>
        )
    }
}

class ProductList extends React.Component {
    constructor() {
        super();
        this.state = { products: [] };

        fetch("products.json")
            .then(response => response.json())
            .then(json => {this.setState({products: json})})
            .catch(error => console.log(error));
    }

    render() {
        let productComponents = [];

        for (let product of this.state.products) {
            productComponents.push(<Product item={product}/>);
        }
        return <ul>{productComponents}</ul>;
    }
}

ReactDOM.render(<FriendsContainer/>, document.getElementById('root'));