import React from 'react'
import styled from 'styled-components'


const Banner = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;
    height 50px;
    align-items: center;
    background-color: purple;
`;

const Container = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    background-color: green;
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

export default class Dropdown extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }
    render(){
        return(
            <div>
                <Banner>Dropdown View</Banner>
                
                <Container>
                    <Button>Click Me</Button>
                </Container>
            </div>
        )
    }
}