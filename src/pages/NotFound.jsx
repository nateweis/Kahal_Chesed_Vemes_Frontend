import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <Container>
        <Background>LOGO</Background>
        <MessageContainer>
            <Message>Sorry, this is not the page you are looking for.</Message>
            <Info>404 Page not found</Info>
        </MessageContainer>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
    height: 100vh;
    position: relative;
    background-color: #ffffff44;
`
const Background = styled.div` 
    color: var(--black);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -5;
    font-size: 20rem;
    transform: translate(-50%, -70%);
`
const MessageContainer = styled.div` 
    background-color: rgba(255,255,255,0.13);
    height: 320px;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50% ;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    color: var(--blue);
    letter-spacing: 0.5px;
    outline: none;
    border-radius: 10px;
    text-align: center;
    padding: 20px ;
`
const Message = styled.h1``
const Info = styled.h3`
    margin-top: 50px ;
`

export default NotFound