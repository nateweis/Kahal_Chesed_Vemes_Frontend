import React, {Component} from 'react';


class FlashMessage extends Component{
    constructor(props){
        super(props)
        this.state = {
            flashMessage : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda exercitationem quo vel consectetur veritatis veniam. Nisi voluptatum voluptates consectetur quaerat ex. Nam, quibusdam. Id ipsa consequatur dolorem ipsum neque quisquam?'
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
        width: 'max-content',
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