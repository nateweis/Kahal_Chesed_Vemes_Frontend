import React from 'react';
import {withRouter} from 'react-router-dom'
import { Waypoint } from 'react-waypoint';
import {useSelector, useDispatch} from "react-redux";
import {navTop} from '../reducers/PositionReducer';
import {small, tablet} from '../responsive'
import styled from 'styled-components';
import Auth from '../modules/Auth';

const Nav = (props) => {
  const navState = useSelector(state => state.nav)
  const dispatch = useDispatch()
  const hit = () => dispatch(navTop(true))

  return (
    <Waypoint topOffset={navState.navState? 0 : 75} onLeave={hit}>
      <Container navFix={navState.navState} location={props.location.pathname}>
          <Wrapper>
              <Left> <Logo onClick={() => props.history.push('/home')} >LOGO</Logo> </Left>

              <Right>
                <LinkWrapper>
                  <LinkStyle>Link</LinkStyle>
                  <LinkStyle>Link</LinkStyle>
                  <LinkStyle onClick={() => props.history.push('/donations')} >Donate</LinkStyle>
                  <LinkStyle>Link</LinkStyle>
                  <LinkStyle>Link</LinkStyle>
                  {Auth.getToken() && <LinkStyle onClick={() => props.history.push('/admin/edits')} admin={true}>Admin Page</LinkStyle>}
                </LinkWrapper>
              </Right>
          </Wrapper>
      </Container>
    </Waypoint>
  )
}

// ///// Style ////////
const Container = styled.div` 
  height: 80px;
  width: 100% ;
  transition: .2s ease-in-out;
  background-color: ${props => (props.navFix || props.location !== '/home')? '#2A4158ee' : 'transparent'};
  position: ${props => props.navFix? 'fixed' : 'relative'};
  top: ${props => props.navFix && 0};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  /* border: 1px solid black; */
  height: 89% ;
  width: 85% ;
  max-width: 1440px ;
  ${small({width: '85%', minWidth: '840px'})}
  ${tablet({width: '100%', minWidth: '0'})}
  display: flex;
  color: var(--white);
  font-weight: bold;
`
const Left = styled.div` 
  flex: 1;
  display: flex;
  align-items: center;
`
const Logo = styled.h1` 
  cursor: pointer;
`
const Right = styled.div` 
  flex: 1;
`
const LinkWrapper = styled.ul` 
  list-style: none;
  height: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LinkStyle = styled.li` 
 cursor: pointer;
 color: ${props => props.admin && 'var(--ly)'};
`

export default withRouter(Nav)