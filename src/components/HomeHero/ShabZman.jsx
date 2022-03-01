import React from 'react'
import { mobile } from '../../responsive';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {overlayActive} from '../../reducers/OverlayReducer'

const ShabZman = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Wrapper>
        <Section>
            <Title>Shabbos Zmanim</Title>
            <Hr />
          </Section>
          
          <Section>
            <ListHeader>Friday, Jan 1</ListHeader>
            <ListContainer>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            </ListContainer>
          </Section>

          <Section>
            <ListHeader>Friday, Jan 2</ListHeader>
            <ListContainer>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            </ListContainer>
          </Section>

          <Section>
            <ListHeader>Friday, Jan 3</ListHeader>
            <ListContainer>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            </ListContainer>
          </Section>

      </Wrapper>

      <More onClick={() => dispatch(overlayActive(true))}>Show All</More>

    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
    width: 25% ;
    border: 7px solid #8C9EA3;
    border-radius: 5px;
    background-color: #fff;
    ${mobile({width: '100%'})}
    position: relative;
`
const Wrapper = styled.div` 
    height: 90% ;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    overflow: hidden;
`
const Section = styled.div` 
  margin-top: 15px;
  /* flex: 1; */
  
`
const Title = styled.h1` 
  color: var(--black);
  font-weight: normal;
  font-size: 24px;
  text-align: center;
`
const Hr = styled.hr` 
  margin: 5px auto;
  width: 70% ;
`
const ListHeader = styled.h3` 
  color: var(--black);
  font-size: 16px;
  text-decoration: underline;
`
const ListContainer = styled.ul` 
  list-style: none;
  color: var(--black);
  font-size: 12px;
`
const List = styled.li` 
  margin-top: 5px;
  display:flex;
  justify-content: space-between;
`
const Event = styled.span` `
const Time = styled.span` `
const More = styled.button` 
  background-color: transparent;
  border: 2px solid var(--blue);
  border-radius: 5px;
  display: block;
  margin: auto;
  font-family: 'Open Sans';
  font-size: 16px;
  color: var(--blue);
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  transition: .3s ease-in-out;

  &:hover{
    background-color: var(--blue);
    color: white;
  }
`

export default ShabZman