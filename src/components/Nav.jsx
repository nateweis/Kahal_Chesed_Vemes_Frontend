import React, {useState} from 'react'
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components'

const Nav = () => {
  const [fixed, setFixed] = useState(false)
  const hit = () => setFixed(true)

  return (
    <Waypoint topOffset={80} onLeave={hit}>
      <Container navFix={fixed}>

      </Container>
    </Waypoint>
  )
}

// ///// Style ////////
const Container = styled.div` 
  height: 80px;
  width: 100% ;
  background-color: #2A4158ee;
  position: ${props => props.navFix? 'fixed' : 'relative'};
  top: ${props => props.navFix && 0};
  z-index: 100;
`

export default Nav