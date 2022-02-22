import React, {Component} from 'react';

class HomeSlide extends Component{
    constructor(props){
        super(props)
        this.state = {
            radioBtns: [true, false, false, false]
        }
    }

    handleRadio = () => {
        console.log('click')
    }

    slideIt = (index) => {
        let arr = []
        for (let i = 0; i < 4; i++) {
            if(i === index)arr.push(true)
            else arr.push(false)
        }
        this.setState({radioBtns: arr})
    }

    render(){
        return(
            <>  
                <div className="slideContainer" style={style.col1}>
                    <div className="slides">
                        {/* Radio Btns */}
                        <input type="radio" name="radio-btn" readOnly checked={this.state.radioBtns[0]} id="radio1" />
                        <input type="radio" name="radio-btn" readOnly checked={this.state.radioBtns[1]} id="radio2"/>
                        <input type="radio" name="radio-btn" readOnly checked={this.state.radioBtns[2]} id="radio3" />
                        <input type="radio" name="radio-btn" readOnly checked={this.state.radioBtns[3]} id="radio4" />

                        {/* Slide Articals */}
                        <div className="singleSlide first" >
                            <div className="innerDiv" style={style.slide1}></div>
                        </div>
                        <div className="singleSlide">
                            <div className="innerDiv" style={style.slide2}></div>    
                        </div>
                        <div className="singleSlide">
                            <div className="innerDiv" style={style.slide3}></div>
                        </div>
                        <div className="singleSlide">
                            <div className="innerDiv" style={style.slide4}></div>
                        </div>

                        {/* Auto Nav */}
                        <div className="autoSwitch">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>

                    </div>

                    {/* Manual Nav */}
                    <div className="manualSwitch">
                        <span onClick={()=>this.slideIt(0)} className="manual-btn"></span>
                        <span onClick={()=>this.slideIt(1)} className="manual-btn"></span>
                        <span onClick={()=>this.slideIt(2)} className="manual-btn"></span>
                        <span onClick={()=>this.slideIt(3)} className="manual-btn"></span>
                    </div>

                </div>
            </>
        )
    }
}

const style= {
    col1:{
        gridColumn: 'span 3'
    },
    slide1 :{backgroundColor: 'pink'},
    slide2 :{backgroundColor: '#00bcd4'},
    slide3 :{backgroundColor: '#8bc34a'},
    slide4 :{backgroundColor: '#a271ab'},
}

export default HomeSlide