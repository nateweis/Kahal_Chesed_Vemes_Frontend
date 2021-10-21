import React, {Component} from 'react';
import Nav from './Nav';

class Template extends Component{

    render(){
        return(
            <>
                <Nav history={this.props.history} />
            </>
        )
    }
}

export default Template