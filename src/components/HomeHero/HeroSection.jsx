import React from 'react'
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <Container>
        <Top>
            <Img />
        </Top>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
    height: 95vh;
    position: relative;
    top: -80px;
    z-index: -1;
    border-bottom: 3px solid black;
`
const Top = styled.div` 
    height: 35%;
`
const Img = styled.div` 
    height: 100% ;
    background-color: rgba(0,0,0,.2);
`
const Center = styled.div` 

`

export default HeroSection