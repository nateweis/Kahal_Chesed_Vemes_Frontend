import React, { Component } from 'react'

import Auth from '../modules/Auth'

class loginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            admin: false,
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmitLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/users',{method: 'POST', headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
        .then(res =>{
            res.json()
            .then(data => Auth.saveToken(data.token))
        })
    }

    handleSubmitSignup = (e) => {
        e.preventDefault()
        if(this.state.password !== this.state.confirmPassword) this.setState({errorMessage: "Password Has To Match Confirmation Password", password: "", confirmPassword: ""})
    }

    loggout = () => {
        Auth.removeToken()
    }

    render() {
        const lgout = Auth.getToken() ? <button onClick={this.loggout}>Logout</button> : " "
        return (
            <>
                <form onSubmit={this.handleSubmitLogin} style={style.form}>
                  <h3>Login</h3>
                  <input type="text"/> <br/><br/>
                  <input type="submit" value="Submit"/>
                </form>  

                <form style={style.form} onSubmit={this.handleSubmitSignup}>
                    <h3>New User</h3>
                    <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} /> <br/>
                    <input type="password" placeholder="Passsword" name="password" value={this.state.password} onChange={this.handleChange} /> <br/>
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} /> <br/>
                    <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} /> <br/>
                    <p>{this.state.errorMessage}</p>

                    <input type="submit" />
                </form>

                {lgout}
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

export default loginForm