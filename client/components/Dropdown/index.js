import React from 'react'
import DropdownItem from '../DropdownItem'
import css from './Dropdown.css'

export default class Dropdown extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className={css.dropdown}>
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem>My Profile</DropdownItem>
            </div>
        )
    }


}