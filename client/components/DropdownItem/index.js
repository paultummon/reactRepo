import React from 'react'


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
                <span className="icon-button">{leftIcon}</span>
                {children}
                <span className="icon-button">{rightIcon}</span>
            </a>
        )
    }


}