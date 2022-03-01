import React from 'react'
import styled from 'styled-components'
import {CloseOutlined} from '@material-ui/icons';
import {useSelector, useDispatch} from "react-redux";
import {overlayActive} from '../reducers/OverlayReducer'


const InfoOverlay = () => {
  const overlayState = useSelector(state => state.overlay.active)
  const dispatch = useDispatch()
  return (
    <Container disp={overlayState}>
        <Wrapper>
            <CloseContainer onClick={() => dispatch(overlayActive(false))}><CloseOutlined style={{color: 'white', fontSize: '30px'}} /></CloseContainer>
        </Wrapper>
    </Container>
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