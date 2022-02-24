import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Slider = () => {
  const [position, setPosition] = useState(0)
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if(position < 2) setPosition(pre => pre + 1)
      else setPosition(0)
    }, 10000)

    return () => clearInterval(autoSlide)
  })

  return (
    <Container>
        <Wrapper sliderIndex={position}>
            <Slide color='salmon'></Slide>
            <Slide color='lightblue'></Slide>
            <Slide color='purple'></Slide>
        </Wrapper>

        <ButtonWrapper >
            <CircleBtn onClick={() => setPosition(0)} bc={position === 0? true : false} />
            <CircleBtn onClick={() => setPosition(1)} bc={position === 1? true : false} />
            <CircleBtn onClick={() => setPosition(2)} bc={position === 2? true : false} />
        </ButtonWrapper>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
 border: 7px solid #8C9EA3;
 width: 69% ;
 border-radius: 5px;
 overflow: hidden;
 position: relative;
 
`
const Wrapper = styled.div` 
  width: 300% ;
  display: flex;
  height: 100% ;
  transition: all 1.5s ease;
  transform: translateX(${props => props.sliderIndex * -33.3333333333}%);
`
const Slide = styled.div` 
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
`

const ButtonWrapper = styled.div` 
  width: 100%;
  height: 100px;
  position: absolute;
  z-index: 3;
  bottom: 30px;
  left: 50% ;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`
const CircleBtn = styled.div` 
  height: 18px;
  width: 18px;
  border: 2px solid white;
  border-radius: 50% ;
  margin: 0 10px;
  cursor: pointer;
  transition: .2s ease-in-out;
  background-color: ${props => props.bc && 'white'};

  &:hover{background-color: #ddd}
`

export default Slider