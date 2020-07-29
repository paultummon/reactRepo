import React from 'react'
import css from './NavBar.css'
import classnames from 'classnames'
export default class NavBar extends React.Component {

    constructor(props){
        console.log('THIS IS CSS ====>', css)
        console.log('THIS IS CSS.NAVLIST ====>', css.tester)
        super(props)
    }
    render() {
        return (
            <div className={css.tester}> 
                <nav className={css.navbar}>
                    <ul className={css.navList}>{this.props.children}</ul>
                </nav>
            </div>
        )
    }
}