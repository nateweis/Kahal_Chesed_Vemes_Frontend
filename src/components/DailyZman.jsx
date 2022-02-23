import React from 'react'
import styled from 'styled-components'

const DailyZman = () => {
  return (
    <Container>
        <ZmanContainer>

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
`

export default DailyZman