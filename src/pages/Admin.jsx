import React from 'react'
import styled from 'styled-components'
import Auth from '../modules/Auth'
import Sidebar from '../components/Admin/Sidebar'

const Admin = (props) => {
  const loggout = () => {Auth.removeToken(); props.push('/home');}

  return (
    <Container>
      <Sidebar />
      <Loggout onClick={loggout}>Loggout</Loggout>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
  position: relative;
  margin-left: 150px ;
`
const Loggout = styled.button` 

`

export default Admin