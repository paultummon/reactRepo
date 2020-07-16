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
                    <li>Game 1</li>
                    <li>Game 2</li>
                    <li>Game 3</li>
                </ul>
            </div>
        )
    }
}