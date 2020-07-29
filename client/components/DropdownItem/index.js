import React from 'react'
import css from './DropdownItem.css'
export default class DropdownItem extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        const {children, leftIcon, rightIcon} = this.props
        return(
            <a href="#" className="menu-item">
                <span className={css.iconButton}>{leftIcon}</span>
                {children}
                <span className={css.iconButton}>{rightIcon}</span>
            </a>
        )
    }


}