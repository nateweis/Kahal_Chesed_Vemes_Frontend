import React, { Component } from 'react'

class loginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/users',{method: 'POST', headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
        .then(res =>{
            res.json()
            .then(data => console.log(data))
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} style={style.form}>
                  <h3>Login</h3>
                  <input type="text"/> <br/><br/>
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

export default loginForm