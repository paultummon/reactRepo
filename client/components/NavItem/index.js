import React from 'react'

export default class NavItem extends React.Component {

    constructor(props){
        super(props)
    }
    render() {
        const {icon} = this.props
        return (
            <li className="nav-item">
              <a href="#" className="icon-button">
                {icon}
              </a>
            </li>
        )
    }
}
