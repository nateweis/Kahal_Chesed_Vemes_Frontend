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

    addNewUser = () => {
        fetch('http://localhost:3001/users/newUser',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            res.json()
            .then( data => {
                this.resetState()
                console.log(data)
            })
        })
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
            })
        })
    }

    handleSubmitSignup = (e) => {
        e.preventDefault()
        let properEmailFormat = false;

        if (this.state.email.length >= 1){
            const emailCha = this.state.email.split("");
            let hasAt = false;
            let hasDot = false
            emailCha.forEach(cha => {
                if(cha === '@') hasAt = true;
                if(cha === '.' && hasAt) hasDot = true;
            });
            if(hasDot === false) this.setState({errorMessage: "Invalid Email Address", email: ""})
            else properEmailFormat = true
        }

        if(this.state.username.length <= 1) this.setState({errorMessage: "Longer Passsword Required (Minimum Characters 2)", username: ""})
        else if(this.state.password.length < 8) this.setState({errorMessage: "Password Has To Be At Least 8 Characters Long", password: "", confirmPassword: ""})
        else if(this.state.password !== this.state.confirmPassword) this.setState({errorMessage: "Password Has To Match Confirmation Password", password: "", confirmPassword: ""})
        else if(this.state.email.length <= 1)this.setState({errorMessage: "Invalid Email Address", email: ""})
        else if(properEmailFormat){
            this.addNewUser()
        }
    }

    loggout = () => {
        Auth.removeToken()
    }

    resetState = () => {
        this.setState({
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            admin: false,
            errorMessage: ""
        })
    }

    render() {
        const lgout = Auth.getToken() ? <button onClick={this.loggout}>Logout</button> : " "
        return (
            <>
                <form onSubmit={this.handleSubmitLogin} style={style.form}>
                  <h3>Login</h3>
                  <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                  <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <br/><br/>
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