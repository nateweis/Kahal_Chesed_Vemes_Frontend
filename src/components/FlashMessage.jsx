import React from 'react'
import styled from "styled-components";

const FlashMessage = () => {
  return (
    <Container>
        Flash Message Scrolling By 
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div`
    height: 45px;
    background-color: #514747;
    color: var(--white);
    display: flex;
    align-items: center;
    font-size: 20px;
`

export default FlashMessage