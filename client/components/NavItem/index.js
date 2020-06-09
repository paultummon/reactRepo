// import React from 'react'

import React, {useState} from 'react';

export default class NavItem extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {open:false};
    }

    componentDidMount(){

    }
    render() {
        // const [open, setOpen] = useState(false)
        // hooks can only be called in functional components
        const {icon, children} = this.props
        const {open} = this.state
        console.log('THIS IS OPEN NOW ===>', open)
        return (
            <li className="nav-item">
              <a href="#" className="icon-button" onClick={() => this.setState({open:!open})}>
                {icon}
              </a>
              {open && children}
            </li>
        )
    }
}
