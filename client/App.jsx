import React, {useState} from 'react';
import './App.scss'
const { getAllClients } = require('./sources/clients');
import {bindActionCreators} from 'redux'
import { selectUser } from 'actions/users'
import {connect} from 'react-redux'
import DropdownView from './views/Dropdown'
import Games from './views/Games'
import Shopping from './views/Shopping'
import NavBar from './components/NavBar'
import NavItem from './components/NavItem'
import Dropdown from './components/Dropdown'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

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
            // console.log('THIS IS RESPONSE ====>', response)
            // console.log('THIS IS REDUX USERS ====>', this.props)
            this.setState({clients: response})
        })
    }

    render() {
        // console.log('THIS IS PROPS ====>', this.props)
        // console.log('THIS IS STATE ====>', this.state)
        return (
            <Router>
            <div className='navContainer'>
                <NavBar onClick={() => this.props.selectUser(this.props.users[0])} testProps='This is testProps'>
                    <NavItem icon={srcClose} route='about'/>
                    <NavItem icon={srcClose} route='games'/>
                    <NavItem icon={srcClose} route='shopping'/>
                    <NavItem icon={srcClose} route='news'/>
                    <NavItem icon={srcClose} route='dropdown'/>
                    <NavItem icon={srcEmail}>
                        <Dropdown/>
                    </NavItem>
                </NavBar>
                <Switch>
                    <Route
                        path='/about'
                        component={Games}
                    />
                    <Route
                        path='/games'
                        component={Games}
                    />
                    <Route
                        path='/shopping'
                        component={Shopping}
                    />
                    <Route
                        path='/news'
                        component={Games}
                    />
                    <Route
                        path='/cars'
                        component={Games}
                    />
                    <Route
                        path='/dropdown'
                        component={DropdownView}
                    />
                </Switch>
                {/* <button style={{color: "red"}} onClick={() => this.props.selectUser(this.props.users[0])}>SelectedUser ={this.props.activeUser ? this.props.activeUser.first : ''}</button> */}

            </div>
            </Router>
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