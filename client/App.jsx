import React, {useState} from 'react';
import './App.css'
import { getAllClients } from './sources/clients'
import {bindActionCreators} from 'redux'
import { selectUser } from 'actions/users'
import {connect} from 'react-redux'
import About from './views/About'
import DropdownView from './views/Dropdown'
import Games from './views/Games'
import Shopping from './views/Shopping'
import NavBar from './components/NavBar'
import NavItem from './components/NavItem'
import Dropdown from './components/Dropdown'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import close from 'client/svgs/close.svg';
import email from 'client/svgs/email.svg';

export default connect(mapStateToProps, matchDispatchToProps)(class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {clients:[]};
    }

    componentDidMount() {
        getAllClients().then(response => {
            this.setState({clients: response})
        })
        this.props.selectUser(this.props.users[0])
    }

    render() {
        return (
            <Router>
            <div className='appContainer'>
                <h1>Welcome Back: {this.props.activeUser ? this.props.activeUser.first : ''}</h1>
                <NavBar onClick={() => this.props.selectUser(this.props.users[0])} testProps='This is testProps'>
                    <NavItem icon={<img src={close} alt="" height="25px" width="25px"/>} route='games'/>
                    <NavItem icon={<img src={close} alt="" height="25px" width="25px"/>} route='shopping'/>
                    <NavItem icon={<img src={close} alt="" height="25px" width="25px"/>} route='news'/>
                    <NavItem icon={<img src={close} alt="" height="25px" width="25px"/>} route='dropdown'/>
                    <NavItem icon={<img src={email} alt="" height="25px" width="25px"/>}>
                        <Dropdown/>
                    </NavItem>
                </NavBar>
                <Switch>
                    <Route
                        path='/'
                        component={About}
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