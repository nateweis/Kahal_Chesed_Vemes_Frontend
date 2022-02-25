import React from 'react'
import styled from 'styled-components'

import { small, tablet } from '../responsive'

const DailyZman = () => {
  return (
    <Container>
        <ZmanContainer>
          <Wrapper>

            <DailyWrapper></DailyWrapper>
            <Hr />
            <ZmansWrapper></ZmansWrapper>

          </Wrapper>
        </ZmanContainer>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
    height: 550px;
    background-color: #8C9EA3;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ZmanContainer = styled.div` 
    height: 350px ;
    background-color: white;
    width: 50%;
    /* border: 1px solid black; */
    box-shadow: 5px 5px 25px #514747,
    -5px -5px 25px #514747;
    border-radius: 5px;

    ${small({width: '75%', minWidth: '840px'})}
    ${tablet({width: '99%', minWidth: '0'})}
`
const Wrapper = styled.div` 
  height: 100% ;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const DailyWrapper = styled.div` 
  height: 100%;
  width: 49%;
`
const Hr = styled.div` 
  border-left: 3px solid #514747bb;
  height: 80%;
  width: 1px;
  border-radius: 10px;
`
const ZmansWrapper = styled.div` 
  height: 100%;
  width: 49%;
`

export default DailyZman