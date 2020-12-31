import React, { Component } from 'react'


class audioPlayer extends Component{
    constructor(props){
        super(props)
        this.ref = React.createRef()
        this.state = {
            currentT: "0:00",
            endT: "0:00"
        }
    }

    componentDidMount(){
        if(this.ref.current.duration){
            const ct = this.fmtMSS(this.ref.current.currentTime)
            const et = this.fmtMSS(this.ref.current.duration)
            this.setState({
                currentT: ct,
                endT: et
        })
        }
    }

    fmtMSS = (s) => { 
        const int = s
        const min = Math.floor(int / 60)
        const sec = Math.floor(int) % 60
        // this.setState({endT: `${min}:${sec > 9 ? sec : "0"+sec}`})
        return `${min}:${sec > 9 ? sec : "0"+sec}`
     }

     handleProgressBar = (e) => {
         
     }
    

    look = () => {
        // console.log(this.ref)
        // console.log(this.ref.current.currentTime)
        // console.log(this.ref.current.duration)
        console.log(this.fmtMSS(this.ref.current.duration))
       
    }
    
 
    render(){
        return(
            <>
                <audio controls src="bensound-goinghigher.mp3" 
                ref={this.ref} 
                onCanPlay ={() => this.setState({endT: this.fmtMSS(this.ref.current.duration), rawET: this.ref.current.duration, rawCT : this.ref.current.currentTime})}
                onTimeUpdate={()=> this.setState({currentT: this.fmtMSS(this.ref.current.currentTime)})}

                ></audio>
                <div > 
                    <button onClick={this.look}>Look</button>
                    <button onClick={()=>this.ref.current.play()}>Play</button>
                    <button onClick={()=> this.ref.current.pause()}>Pause</button>
                </div>

                <div className="progressb">
                    <span className="currentT">{this.state.currentT}</span>
                    <input type="range" name="progresBar" onChange={this.handleProgressBar}
                    value={this.state.rawET? (this.state.rawCT * 100) / this.state.rawET : 0}
                    />
                    <span className="endT">{this.state.endT}</span>
                </div>
            </>
        )
    }
}


export default audioPlayer