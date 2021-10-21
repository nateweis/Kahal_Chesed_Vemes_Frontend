import React, {Component} from 'react';

class Zmainim extends Component{

    render(){
        return(
            <>  
                <div style={style.col2}>
                    Zmanin
                    <div>1</div>
                    <div>2</div>
                </div>
            </>
        )
    }
}

const style= {
    col2:{
        gridRow: 'span 2'
    }
}

export default Zmainim