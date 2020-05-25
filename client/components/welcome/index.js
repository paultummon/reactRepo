import React from 'react'
// import styled from 'styled-components'
//https://www.youtube.com/watch?v=3SpAg5tr7Ws&t=197s

// const Button = styled.a`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;

//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${props => props.primary && css`
//     background: white;
//     color: palevioletred;
//   `}
// `
export default class Welcome extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <h1>Hi guys</h1>
        )
    }
}