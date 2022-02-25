import React from 'react';
import { Waypoint } from 'react-waypoint';
import {useSelector, useDispatch} from "react-redux";
import {navTop} from '../reducers/PositionReducer';
import styled from 'styled-components';

const Nav = () => {
  const navState = useSelector(state => state.nav)
  const dispatch = useDispatch()
  const hit = () => {
    dispatch(navTop(true))
    console.log("navhit")
  }

  return (
    <Waypoint topOffset={navState.navState? 0 : 75} onLeave={hit}>
      <Container navFix={navState.navState}>

      </Container>
    </Waypoint>
  )
}

// ///// Style ////////
const Container = styled.div` 
  height: 80px;
  width: 100% ;
  background-color: #2A4158ee;
  position: ${props => props.navFix? 'fixed' : 'relative'};
  top: ${props => props.navFix && 0};
  z-index: 100;
`

export default Nav