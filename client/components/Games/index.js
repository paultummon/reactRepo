import React from 'react'
// import css from './games.css'
import './games.css'
export default class Games extends React.Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <ul class='gamesList'>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                    <li>List Item 3</li>
                </ul>
            </div>
        )
    }
}