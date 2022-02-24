import React, {useRef, useState, useEffect} from 'react'
import styled, { keyframes } from "styled-components";

const FlashMessage = () => {
  const [width, setWidth] = useState(30)
  const refMessage = useRef(null)
  useEffect(() => {
    setWidth(refMessage.current.offsetWidth)
  })

  return (
    <Container>
        <Wrapper ref={refMessage} num={width} time={20} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatem! Nesciunt perferendis qui sapiente, laborum reprehenderit nam hic officia beatae eos odit minima, magni cumque accusamus dolorem id ipsa? Non.
        </Wrapper> 
    </Container>
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