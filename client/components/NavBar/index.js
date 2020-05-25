import React from 'react'

export default class NavBar extends React.Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <nav className='navbar'>
              <ul className='navbar-nav'>{this.props.children}</ul>
            </nav>
        )
    }
}