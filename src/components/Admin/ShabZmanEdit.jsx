import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";

import {CSSTransition} from 'react-transition-group';

const ShabZmanEdit = () => {
  const display = useSelector(state => state.admin.animate[1])
  return (
    <CSSTransition classNames={'slide-in-out'} in={display} timeout={0}>
        <Container>
            ShabZmanEdit
        </Container>
    </CSSTransition>
  )
}

// ///// Style ////////
const Container = styled.div` 
    transition: .3s linear;

    &.slide-in-out-enter{transform: translateX(-100vw);}
    &.slide-in-out-enter-active{transform: translateX(0);}
    &.slide-in-out-exit{transform: translateX(0);}
    &.slide-in-out-exit-done{transform: translateX(-100vw);}
`

export default ShabZmanEdit