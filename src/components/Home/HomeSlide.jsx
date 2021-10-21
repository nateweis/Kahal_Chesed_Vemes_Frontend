import React, {Component} from 'react';

class HomeSlide extends Component{

    render(){
        return(
            <>  
                <div style={style.col1}>
                    Moving Slide
                </div>
            </>
        )
    }
}

const style= {
    col1:{
        gridColumn: 'span 3'
    }
}

export default HomeSlide