import React from 'react'
import { mobile } from '../../responsive'
import styled from 'styled-components'

const ShabZman = () => {
  return (
    <Container>
        <Section bg={'none'}>
          <Title>Shabbos Zmanim</Title>
          <Hr />
        </Section>
        
        <Section bg={'none'}>
          <ListHeader>Friday, Jan 1</ListHeader>
          <ListContainer>
            <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
          </ListContainer>
        </Section>

        <Section bg={'none'}>
          <ListHeader>Friday, Jan 2</ListHeader>
          <ListContainer>
            <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
          </ListContainer>
        </Section>

        <Section bg={'none'}>
            <Title>Have a Good Shabbos</Title>
        </Section>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
    width: 25% ;
    border: 7px solid #8C9EA3;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* overflow: scroll; */
    padding: 0 30px;
    ${mobile({width: '100%'})}
`
const Section = styled.div` 
  background-color:${props => props.bg};
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

export default ShabZman