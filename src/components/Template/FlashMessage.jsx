import React, {Component} from 'react';

class FlashMessage extends Component{

    render(){
        return(
            <>  
                <div style={style.messageContainer}>
                    <div style={style.message}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quaerat ullam tenetur porro alias illo eligendi, 
                        accusamus quo quasi? Nihil laudantium debitis, pariatur voluptates nemo eaque? In cum enim suscipit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, numquam pariatur nostrum aliquid, consequatur magnam quisquam architecto laudantium aut ex impedit 
                        culpa temporibus mollitia fuga nisi error amet necessitatibus quasi?
                    </div>
                </div>
            </>
        )
    }
}

const style = {
    message:{
        width : 'max-content',
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