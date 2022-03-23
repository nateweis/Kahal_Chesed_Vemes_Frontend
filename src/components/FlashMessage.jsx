import React, {useRef, useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {navTop} from '../reducers/PositionReducer';
import { Waypoint } from 'react-waypoint';
import styled, { keyframes } from "styled-components";

const FlashMessage = () => {
  const [width, setWidth] = useState(30)
  const refMessage = useRef(null)
  const navState = useSelector(state => state.nav)
  const msg = useSelector(state => state.admin.homeScreenData.flashMsg)
  const dispatch = useDispatch()
  useEffect(() => {
    setWidth(refMessage.current.offsetWidth)
  })

  const entered = () => dispatch(navTop(false))

  return (
    <Waypoint onEnter={entered} bottomOffset={navState.navState? 20: 0}>
      <Container>
          <Wrapper ref={refMessage} num={width} time={20} >
              {msg}
          </Wrapper> 
      </Container>
    </Waypoint>
  )
}

// ///// Style ////////
const Container = styled.div`
    height: 45px;
    background-color: #514747;
    color: var(--white);
    font-size: 20px;
    overflow: 'hidden';
    display: flex;
    align-items: center;
`

const animateWords = (width) => keyframes`
  0%{transform: translateX(100vw);}
  100%{transform: translateX(-${width}px);}
`

const Wrapper = styled.div` 
  min-width: max-content;
  height: 75% ;
  animation: ${props => animateWords(props.num)} ${props => props.time}s linear infinite;

`


export default FlashMessage