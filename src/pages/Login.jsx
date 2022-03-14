import React, {useState} from 'react'
import styled from 'styled-components'
import Auth from '../modules/Auth';

const Login = (props) => {
  const initState = {username: "", password: ""};
  const [formState, setState] = useState(initState)

  const handleChange = (e) => setState({...formState, [e.target.name]: e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('https://kcv-api.herokuapp.com/users',{method: 'POST', headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(formState)})
    .then(res =>{
        res.json()
        .then(data => {
            data.token ? Auth.saveToken(data.token) : console.log(data)
            setState(initState)
            if(data.token) props.push('/admin/edits')
        })
    })

  }

  return (
    <Container>
        <Background>LOGO</Background>
        <Form>
            <Title>Login</Title>
            <Wrapper>
                <InputItem>
                    <Label>Username</Label>
                    <Input type='text' placeholder='Username' name="username" value={formState.username} onChange={handleChange} />
                </InputItem>

                <InputItem>
                    <Label>Password</Label>
                    <Input type='password' placeholder='Password' name="password" value={formState.password} onChange={handleChange} />
                </InputItem>

                <InputItem>
                    <Button onClick={handleSubmit}>Log In</Button>
                </InputItem>
            </Wrapper>
        </Form>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
    height: 100vh;
    position: relative;
    background-color: #ffffff44;
`
const Background = styled.div` 
    color: var(--black);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -5;
    font-size: 20rem;
    transform: translate(-50%, -70%);
`
const Form = styled.form` 
    background-color: rgba(255,255,255,0.13);
    height: 520px;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50% ;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    color: var(--blue);
    letter-spacing: 0.5px;
    outline: none;
    border-radius: 10px;
`
const Title = styled.h3` 
    font-size: 42px;
    font-weight: 700;
    line-height: 42px;
    text-align: center;
`
const Wrapper = styled.div` 
   /* border: 1px solid black; */
   margin: 10px ;
`
const InputItem = styled.div` 
    /* border: 1px solid blue; */
    width: 100%;
    height: 100px ;
    margin-top: 30px ;
    
`
const Label = styled.label` 
    display: block;
    font-weight: 500;
    font-size: 18px;
`
const Input = styled.input` 
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.58);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    border: none;
    &:focus-visible{outline:none}
    &::placeholder{color:var(--blue);}
`
const Button = styled.button` 
    margin-top: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.58);
    color: var(--ly);
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    border-color:var(--ly);
`

export default Login