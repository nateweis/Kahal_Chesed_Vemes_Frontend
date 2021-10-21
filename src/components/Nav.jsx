import React, {Component} from 'react';

class Nav extends Component{

    render(){
        return(
            <>
                <div>
                    <ul style={style.listBox}>
                        <li onClick={()=> this.props.history.push('/pages/home')}>Logo</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>ABOUT</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>EVENTS</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>SHUIRIM</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>SIMCHA HALL</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>GIVE BACK</li>
                        <li onClick={()=> this.props.history.push('/pages/events')}>CONTACT US</li>
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
        border: '1px solid black',
        justifyContent: 'space-around',
        padding: '15px 10%',
        margin: '0',
        cursor: 'pointer'
    }
}

export default Nav