import React, {Component} from 'react';

import Auth from '../../modules/Auth'

class Nav extends Component{

    render(){
        return(
            <>
                <div>
                    <ul className="listBox">
                        <li onClick={()=> this.props.history.push('/pages/home')}>Logo</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>ABOUT</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>EVENTS</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>SHUIRIM</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>SIMCHA HALL</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>GIVE BACK</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>CONTACT US</li>
                        {Auth.getToken() ? <li style={style.adminLink} onClick={()=> this.props.history.push('/pages/events')}>ADMIN</li> : ""}
                    </ul>
                </div>
            </>
        )
    }
}

const style = {
    listBox : {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '30px 10%',
        margin: '0',
        cursor: 'pointer'
    },
    adminLink :{
        color: '#FF5B48'
    }
}

export default Nav