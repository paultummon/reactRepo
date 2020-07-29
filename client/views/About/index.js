import React from 'react'
import styled from 'styled-components'
import css from './About.css'


const Banner = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: #949391;
    font-family: Gotham SSm A,Gotham SSm B,arial,sans-serif;
    height 50px;
    align-items: center;
    background-color: #e3e1f7;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 1000px;
    background-image: url(../../../public/img/porsche.jpg);
    width: 100%;
    background-color: green;
`
const ListView = styled.ul`
    justify-content: center;
    color: red;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const CenterContainer = styled.div`
    display: flex;

`

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 1000px;
  background-color: grey;
  border-radius: 10px;
  height: 50px;
  margin: 10px
`
const arrayOfNames = ['steve', 'bucky', 'josh', 'rocket', 'groot', 'natasha']

const renderListItems = () => {
    return <ListView> {arrayOfNames.map(name => {
        return <ListItem>Hello Marvel Character: {name}</ListItem>
    })}</ListView>
}

export default class Dropdown extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Banner>Dropdown View</Banner>
                <Container>
                    {renderListItems()}
                </Container>
                <Button>Click Me</Button>
            </div>
        )
    }
}