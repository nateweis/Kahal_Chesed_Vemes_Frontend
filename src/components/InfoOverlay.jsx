import React from 'react'
import styled from 'styled-components'
import {CloseOutlined} from '@material-ui/icons';
import {useSelector, useDispatch} from "react-redux";
import {overlayActive, slideOut} from '../reducers/OverlayReducer';
import {CSSTransition} from 'react-transition-group';


const InfoOverlay = () => {

  const overlayState = useSelector(state => state.overlay)
  const dispatch = useDispatch()
  const exitModuel = () => {
    dispatch(slideOut())
    setTimeout(() => {
        dispatch(overlayActive(false))
    },500)
  }

  return (
    <CSSTransition classNames={'slide-in-out'} in={overlayState.slide} timeout={0} >
            <Container disp={overlayState.active}>
                <Wrapper>
                    <CloseContainer onClick={exitModuel}><CloseOutlined style={{color: 'white', fontSize: '30px'}} /></CloseContainer>
                </Wrapper>
            </Container>
    </CSSTransition>
  )
}

// ///// Style ////////
const Container = styled.div` 
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, .8);
    position: fixed;
    z-index: 100;
    display: ${props => props.disp? 'flex': 'none'};
    align-items: center;
    justify-content: center;
    transition: .5s linear;

    &.slide-in-out-enter{transform: translateX(100vw);}
    &.slide-in-out-enter-active{transform: translateX(0);}
    &.slide-in-out-exit{transform: translateX(0);}
    &.slide-in-out-exit-done{transform: translateX(100vw);}
    `
const Wrapper = styled.div` 
    width: 85%;
    height: 85% ;
    background-color: var(--blue);
    border: 1px solid white;
`
const CloseContainer = styled.span` 
    float: right;
    padding-top: 3px;
    margin: 10px;
    cursor: pointer;
    transition: .2s all;
    
    &:hover{
        border: 1px solid white;
        border-radius: 50% ;
    }
`

export default InfoOverlay