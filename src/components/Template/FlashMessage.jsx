import React, {Component} from 'react';

class FlashMessage extends Component{
    constructor(props){
        super(props)
        this.state = {
            flashMessage : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quaerat ullam tenetur porro alias illo eligendi, accusamus quo quasi? Nihil laudantium debitis, pariatur voluptates nemo eaque? In cum enim suscipit?'
        }
    }

    render(){
        return(
            <>  
                <div style={style.messageContainer}>
                    <div className="animateMessage" style={style.message}>
                        {this.state.flashMessage}
                        
                    </div>
                </div>
            </>
        )
    }
}

const style = {
    message:{
        whiteSpace: 'nowrap',
        fontSize : '18px'
    },
    messageContainer :{
        backgroundColor: 'black',
        color : 'white',
        overflow: 'hidden',
        padding: '10px 0'
    }
}

export default FlashMessage