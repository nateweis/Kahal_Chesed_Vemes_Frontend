import React, {useState} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from "react-redux";
import {singleHomeEdit} from '../../reducers/AdminReducer';

import {CSSTransition} from 'react-transition-group';

const FlashEdit = () => {
    // Redux Stuff
  const display = useSelector(state => state.admin.animate[0])
  const msg = useSelector(state => state.admin.homeScreenData.flashMsg)
  const dispatch = useDispatch()

    // Component State 
  const [text, setText] = useState(msg)
  

    // Component Functions
  const submit = () => {
      dispatch(singleHomeEdit({name: 'flashMsg', data: text}))
      alert("Flash Message Has Been Updated!")
  }

  return (
    <CSSTransition classNames={'slide-in-out'} in={display} timeout={0}>
        <Container>
            <TextArea onChange={(e) => setText(e.target.value)} value={text}></TextArea>
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