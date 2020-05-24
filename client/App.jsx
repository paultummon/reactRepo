import React from 'react';
import './App.scss'
const { getAllClients } = require('./sources/clients');

export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {clients:[]};
    }

    componentDidMount() {
        getAllClients().then(response => {
            this.setState({clients: response})
        })
    }

    render() {
        return (
            <div className="container">
                {console.log('THIS IS CLIENTS ====>', this.state.clients)}
                <h1>Hello World, React!</h1>
            </div>
        )
    }
}