import React, {useState} from 'react'
import styled from 'styled-components'

import Nav from '../components/Nav'
import FlashMessage from '../components/FlashMessage'
import Footer from '../components/Footer'

const Donations = () => {
  const [amount, setAmount] = useState(0)

  const submit = (e) => {
      e.preventDefault()
      amount[0] === '-' ? alert("please use a postive number") : alert(`Thank you for your generous donation of $${parseFloat(amount).toFixed(2)}`)
  }
  return (
    <Container>
        <FlashMessage />
        <Nav />

        <Wrapper>
            <Form>
                <Title>Donations</Title>
                <Dollar>$</Dollar>
                <Input type='number' min="0" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <Submit onClick={submit}>Submit</Submit>
            </Form>
        </Wrapper>

        <Footer />
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div`
    height: 100vh;
    background-color: var(--white);
`
const Wrapper = styled.div`
    height: 37.5%;
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    text-align: center;
`
const Title = styled.h1`
    margin-bottom: 30px;
`
const Dollar = styled.span``
const Input = styled.input``
const Submit = styled.button``

export default Donations