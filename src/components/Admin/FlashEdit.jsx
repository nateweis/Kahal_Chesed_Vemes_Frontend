import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";

import {CSSTransition} from 'react-transition-group';

const FlashEdit = () => {
  const display = useSelector(state => state.admin.animate[0])
  const msg = useSelector(state => state.admin.homesSreenData.flashMsg)

  const submit = () => {
      alert("Flash Message Has Been Updated!")
  }

  return (
    <CSSTransition classNames={'slide-in-out'} in={display} timeout={0}>
        <Container>
            <TextArea>{msg}</TextArea>
            <Submit onClick={submit}>Submit</Submit>
        </Container>
    </CSSTransition>
  )
}

// ///// Style ////////
const Container = styled.div` 
    transition: .3s linear;
    /* background-color: pink; */
    margin-top: 10%;
    display: flex;
    align-items: center;
    flex-direction: column;

    &.slide-in-out-enter{transform: translateY(100vh);}
    &.slide-in-out-enter-active{transform: translateY(0);}
    &.slide-in-out-exit{transform: translateY(0);}
    &.slide-in-out-exit-done{transform: translateY(100vh);}
`
const TextArea = styled.textarea`
    display: block;
    width: 250px ;
    height: 200px ;
`
const Submit = styled.button`
    display: block;
    margin-top: 20px ;
`

export default FlashEdit