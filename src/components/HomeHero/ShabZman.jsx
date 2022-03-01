import React, {useState} from 'react'
import { mobile } from '../../responsive';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {overlayActive, updateData} from '../../reducers/OverlayReducer'

const ShabZman = () => {
  const initState = {
    "Fiday, Jan 1": [["Event:", "12:00pm"], ["Event:", "12:00pm"], ["Event:", "12:00pm"]],
    "Fiday, Jan 2": [["Event:", "12:00pm"], ["Event:", "12:00pm"], ["Event:", "12:00pm"], ["Event:", "12:00pm"]],
  }
  const [calander, setCalender] = useState(initState)
  const dispatch = useDispatch()
  const moreBtn = () => {
    dispatch(updateData({title: "Shabbos Zmanim", data: calander}))
    dispatch(overlayActive(true))
  }

  return (
    <Container>
      <Wrapper>
        <Section>
            <Title>Shabbos Zmanim</Title>
            <Hr />
          </Section>

          {Object.keys(calander).map((key, index) => {
            return(
              <Section key={index}>
                <ListHeader>{key}</ListHeader>
                <ListContainer>
                  {calander[key].map((item, i) => (<List key={i}> <Event>{item[0]}</Event> <Time>{item[1]}</Time> </List>))}
                </ListContainer>
              </Section>
            )
          })}

          {/* <Section>
            <ListHeader>Friday, Jan 10</ListHeader>
            <ListContainer>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
              <List> <Event>Event:</Event> <Time>12:00pm</Time> </List>
            </ListContainer>
          </Section> */}

      </Wrapper>

      <More onClick={moreBtn}>Show All</More>

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