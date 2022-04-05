import React, {useState} from 'react';
import styled from 'styled-components';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

import Nav from '../components/Nav';
import FlashMessage from '../components/FlashMessage';
import Footer from '../components/Footer';

const Donations = () => {
    // Component State
  const [amount, setAmount] = useState(0)

    // Component Functions
  const handleToken = async (token, address) => {
    const product = {name: "Shule Donation", amount: [parseFloat(amount).toFixed(2) * 100]}
    const res = await axios.post('http://localhost:3001/stripeCheckout', {token, product},{headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
  }  
  const submit = (e) => {
      e.preventDefault()
      amount[0] === '-' ? alert("please use a postive number") : alert(`Thank you for your generous donation of $${parseFloat(amount).toFixed(2) * 100}`)
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
                
                <StripeCheckout
                    stripeKey="pk_test_51KgXEsLAJHnFdTUFBcjAxhc5P2jhfzPccYS8Um2DVG8nV3qxqREw99r6WvnwqcIORN0tyke9HaxOYR6g6Eru3otm00ZwS4w15g"
                    token={handleToken}
                    amount={parseFloat(amount).toFixed(2) * 100}
                    name="Shule Donation"
                    billingAddress
                    shippingAddress
                    ComponentClass="div"
                >
                    <Submit onClick={submit}>Submit</Submit>
                </StripeCheckout>
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