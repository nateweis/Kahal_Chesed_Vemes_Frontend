import React from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from "react-redux";
import {slideIn, slideOut, resetSlide} from '../../reducers/AdminReducer'

const Sidebar = () => {
  const sidebarState = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const switchSlide = (i) => {
    dispatch(slideOut())
    setTimeout(() => {
        dispatch(resetSlide())
        dispatch(slideIn(i))
    },300)
  }

  return (
    <Container>
        <Ul>
            {sidebarState.sidebar.map((key, i) => (<Li key={i}>
                <Button active={key} onClick={() => switchSlide(i)} > {sidebarState.sidebarTitles[i]} </Button> 
            </Li>))}
        </Ul>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div`
    background-color: var(--black);
    width: 150px ;
    height: 100vh;
    position: fixed;
    left: 0 ;
`
const Ul = styled.ul`
    list-style: none;
`
const Li = styled.li`
    /* margin: 25px 0; */
`
const DivButton = styled.div`
    width: 100%;
    height: 30px ;
    background-color: var(--black);
    cursor: pointer;
    color: var(--white);
    text-align: center;
    transition: all 0.1s ease-in-out;
    box-shadow: -0px -0px 6px rgba(255, 255, 255, 0.3),
        0px 0px 6px rgba(0, 0, 0, 0.2);
    
    &:hover{opacity: .3}
    &:active{
        opacity: 1;
        box-shadow: inset -1px -1px 4px rgba(255, 255, 255, 0.1),
          inset 6px 6px 10px rgba(0, 0, 0, 0.1);
    }
`
const Button = styled.button` 
    width: 100% ;
    background-color: transparent;
    cursor: pointer;
    color: var(--white);
    transition: all 0.1s ease-in-out;
    border-style: ${props => props.active && 'inset'}; 

    &:hover{color: var(--ly);}
`

export default Sidebar