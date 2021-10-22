import React, {Component} from 'react';
import Nav from './Nav';
import FlashMessage from './FlashMessage';
import Footer from './Footer';

import './template.css'

class Template extends Component{

    render(){
        return(
            <>  <FlashMessage />
                <Nav history={this.props.history} />
                <Footer />
            </>
        )
    }
}

export default Template