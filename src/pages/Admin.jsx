import React from 'react'
import styled from 'styled-components'
import Auth from '../modules/Auth'
import {useSelector} from "react-redux";

import Sidebar from '../components/Admin/Sidebar'
import FlashEdit from '../components/Admin/FlashEdit';
import ShabZmanEdit from '../components/Admin/ShabZmanEdit';

const Admin = (props) => {
  const state = useSelector(state => state.admin)
  const loggout = () => {Auth.removeToken(); props.push('/home');}

  return (
    <Container>
      <Sidebar />
      <Loggout onClick={loggout}>Loggout</Loggout>

      <Slide disp={state.sidebar[0]} > <FlashEdit /> </Slide>
      <Slide disp={state.sidebar[1]} > <ShabZmanEdit /> </Slide>
      <Slide disp={state.sidebar[2]} ></Slide>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
  position: relative;
  margin-left: 150px ;
  background-color: var(--white);
  height: 100vh;
`
const Loggout = styled.button` 
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`
const Slide = styled.div` 
  height: 100vh;
  width: 100%;
  display: ${props => props.disp? 'flex': 'none'};
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
`

export default Admin