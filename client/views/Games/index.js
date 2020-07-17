import React from 'react'
import './games.css'
export default class Games extends React.Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='gamesContainer'>
                <ul className='gamesList'>
                    <li>Game 1</li>
                    <li>Game 2</li>
                    <li>Game 3</li>
                </ul>
            </div>
        )
    }
}