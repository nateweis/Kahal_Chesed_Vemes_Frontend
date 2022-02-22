import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import ShabZman from './ShabZman'

import {small, tablet} from '../../responsive'

const HeroSection = () => {
  return (
    <Container>
        <Top>
            <Img />
        </Top>

        <Center>
            <Slider />
            <ShabZman />
        </Center>
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
    height: 75%;
    width: 80% ;
    max-width: 1440px; 
    ${small({width: '80%', minWidth: '840px'})}
    ${tablet({width: '100%', minWidth: '0'})}
    border: 2px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`

export default HeroSection