import React from 'react'
// import css from './games.css'
import './shopping.css'
export default class Games extends React.Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <ul class='shoppingList'>
                    <li>Shopping 1</li>
                    <li>Shopping 2</li>
                    <li>Shopping 3</li>
                </ul>
            </div>
        )
    }
}