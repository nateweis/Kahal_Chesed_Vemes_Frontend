import React, { Component } from 'react'

import Auth from '../modules/Auth'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmitLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/users',{method: 'POST', headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(this.state)})
        .then(res =>{
            res.json()
            .then(data => {
                data.token ? Auth.saveToken(data.token) : console.log(data)
                this.resetState()

                if(data.token) this.props.history.push('/pages/admin')

            })
        })
    }

    resetState = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {  
        return (
            <>
                <form onSubmit={this.handleSubmitLogin} style={style.form}>
                  <h3>Login</h3>
                  <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                  <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <br/><br/>
                  <input type="submit" value="Submit"/>
                </form>  
            </>
        )
    }
}


const style = {
    form: {
        width: '500px',
        display: 'block',
        margin: 'auto'
    }
}

export default LoginForm