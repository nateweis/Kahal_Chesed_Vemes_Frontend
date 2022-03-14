import React from 'react'
import styled from 'styled-components'
import Auth from '../modules/Auth'

const Admin = (props) => {
  const loggout = () => {Auth.removeToken(); props.push('/home')}

  return (
    <Container>
      <Loggout onClick={loggout}>Loggout</Loggout>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 

`
const Loggout = styled.button` 

`

export default Admin