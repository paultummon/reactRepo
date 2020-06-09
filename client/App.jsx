import React, {useState} from 'react';
import './App.scss'
const { getAllClients } = require('./sources/clients');
import {bindActionCreators} from 'redux'
import { selectUser } from 'actions/users'
import {connect} from 'react-redux'
import NavBar from './components/NavBar'
import NavItem from './components/NavItem'
import Dropdown from './components/Dropdown'

const srcClose = <img src="client/svgs/close.svg" height="25" width="25"/>
const srcEmail = <img src="client/svgs/email.svg" height="25" width="25"/>
const srcClose2 = <img src="client/svgs/close.svg" height="25" width="25"/>
const srcClose3 = <img src="client/svgs/close.svg" height="25" width="25"/>

export default connect(mapStateToProps, matchDispatchToProps)(class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {clients:[]};
    }

    componentDidMount() {
        getAllClients().then(response => {
            console.log('THIS IS RESPONSE ====>', response)
            console.log('THIS IS REDUX USERS ====>', this.props)
            this.setState({clients: response})
        })
    }

    render() {
        return (
            <div>
                <NavBar onClick={() => this.props.selectUser(this.props.users[0])} testProps='This is testProps'>
                    <NavItem icon={srcClose}/>
                    <NavItem icon={srcClose}/>
                    <NavItem icon={srcClose}/>
                    <NavItem icon={srcClose}/>
                    <NavItem icon={srcEmail}>
                        <Dropdown/>
                    </NavItem>
                </NavBar>
                <button style={{color: "red"}} onClick={() => this.props.selectUser(this.props.users[0])}>SelectedUser ={this.props.activeUser ? this.props.activeUser.first : ''}</button>

            </div>
        )
    }
})

function mapStateToProps(state) {
    return {
        users: state.users,
        activeUser: state.activeUser
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch)
}