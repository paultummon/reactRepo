import React from 'react';
import './App.scss'
const { getAllClients } = require('./sources/clients');
import NavBar from './components/NavBar'
import NavItem from './components/NavItem'
import CloseIcon from './svgs/close.svg'

const src = <img src="client/svgs/close.svg" height="25" width="25"/>

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
            <div>
                <NavBar testProps='This is testProps'>
                    <NavItem icon={src}/>
                </NavBar>
            </div>
        )
    }
}