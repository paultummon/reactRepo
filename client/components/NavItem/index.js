// import React from 'react'

import React, {useState} from 'react';
import css from './NavItem.css'
import close from 'client/svgs/close.svg';

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
        const {icon, children, route} = this.props
        const {open} = this.state
        console.log('THIS IS OPEN NOW ===>', open)
        return (
            <li className={css.navItem}>
              <a href={route} className={css.iconButton} onClick={() => this.setState({open:!open})}>
                {icon}
              </a>
              {open && children}
            </li>
        )
    }
}
