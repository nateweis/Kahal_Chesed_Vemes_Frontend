import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import ShabZman from './ShabZman'

import {useSelector} from "react-redux";
import {small, tablet} from '../../responsive'
import Pic from '../../images/imgFile'

const HeroSection = () => {
  const navTop = useSelector(state => state.nav)

  return (
    <Container nav={navTop.navState}>
        <Top>
            <Img src={Pic['background1']} />
            <Overlay />
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
    top: ${props => props.nav? '0': '-80px'};
    /* border-bottom: 3px solid black; */
`
const Top = styled.div` 
    height: 50%;
    position: relative;
`
const Img = styled.div` 
    height: 100% ;
    width: 100% ;
    background-image: url(${Pic['background1']});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 70%;
`
const Overlay = styled.div` 
    position: absolute;
    width: 100% ;
    height :100%;
    background-color: #51474755;
    top: 0;
`
const Center = styled.div` 
    height: 75%;
    width: 85% ;
    max-width: 1440px; 
    ${small({width: '85%', minWidth: '840px'})}
    ${tablet({width: '100%', minWidth: '0'})}
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
`

export default HeroSection