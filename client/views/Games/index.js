import React from 'react'
import css from './games.css'
export default class Games extends React.Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className={css.gamesContainer}>
                <ul className={css.gamesList}>
                    <li>Game 1</li>
                    <li>Game 2</li>
                    <li>Game 3</li>
                </ul>
            </div>
        )
    }
}