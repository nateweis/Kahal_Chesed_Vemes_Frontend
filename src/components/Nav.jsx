import React, {Component} from 'react';

class Nav extends Component{

    render(){
        return(
            <>
                <div>
                    <ul style={style.listBox}>
                        <li>Logo</li>
                        <li>ABOUT</li>
                        <li>EVENTS</li>
                        <li>SHUIRIM</li>
                        <li>SIMCHA HALL</li>
                        <li>GIVE BACK</li>
                        <li>CONTACT US</li>
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
    }
}

export default Nav