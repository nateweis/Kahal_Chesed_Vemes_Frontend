import React, {Component} from 'react';

class Publishings extends Component{

    render(){
        return(
            <>  
                <div style={style.col4}>
                    Publishings
                    <div>Title</div>
                    <div>Title</div>
                </div>
            </>
        )
    }
}

const style= {
    col4:{
        gridColumn: 'span 2'
    }
}

export default Publishings