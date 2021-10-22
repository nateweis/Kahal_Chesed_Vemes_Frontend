import React, {Component} from 'react';

import HomeSlide from './HomeSlide';
import Publishings from './Publishings';
import UpcomingEvents from './UpcomingEvents';
import Zmainim from './Zmanim';

import './home.css'

class Home extends Component{

    render(){
        return(
            <>  
                <div className="homeContainer" style={style.homeContainer}>
                    <HomeSlide />
                    <Zmainim />
                    <UpcomingEvents />
                    <Publishings /> 
                </div>
            </>
        )
    }
}

const style = {
    homeContainer : {
        display : 'grid',
        gridTemplateColumns: 'repeat(4, 23%)',
        gridGap: '20px',
        gridAutoRows: 'minmax(285px, auto)',
        padding: '0 10%'
    }
}

export default Home