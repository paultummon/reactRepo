import React from 'react'
import DropdownItem from '../DropdownItem'


export default class Dropdown extends React.Component {


    constructor(props){
        super(props)
    }


    componentDidMount(){

    }

    render(){
        return(
            <div className='dropdown'>
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem>My Profile</DropdownItem>
            </div>
        )
    }


}