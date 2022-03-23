import React from 'react'
import styled from 'styled-components'

import Nav from '../components/Nav'
import FlashMessage from '../components/FlashMessage'

const Donations = () => {
  return (
    <Container>
        <FlashMessage />
        <Nav />
        Donations Page
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div``

export default Donations