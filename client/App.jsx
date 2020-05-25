import React from 'react';
import './App.scss'
const { getAllClients } = require('./sources/clients');
import {bindActionCreators} from 'redux'
import { selectUser } from 'actions/users'
import {connect} from 'react-redux'
import NavBar from './components/NavBar'
import NavItem from './components/NavItem'

const src = <img src="client/svgs/close.svg" height="25" width="25"/>

export default connect(mapStateToProps, matchDispatchToProps)(class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {clients:[]};
    }

    componentDidMount() {
        getAllClients().then(response => {
            console.log('THIS IS REDUX USERS ====>', this.props)
            this.setState({clients: response})
        })
    }

    render() {
        return (
            <div>
                <button style={{color: "red"}} onClick={() => this.props.selectUser(this.props.users[0])}>SelectedUser ={this.props.activeUser ? this.props.activeUser.first : ''}</button>
                <NavBar onClick={() => this.props.selectUser(this.props.users[0])} testProps='This is testProps'>
                    <NavItem icon={src}/>
                </NavBar>
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