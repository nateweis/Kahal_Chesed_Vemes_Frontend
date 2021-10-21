import React, {Component} from 'react';

import HomeSlide from './HomeSlide';
import Publishings from './Publishings';
import UpcomingEvents from './UpcomingEvents';
import Zmainim from './Zmanim';

class Home extends Component{

    render(){
        return(
            <>  
                <div style={style.homeContainer}>
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
        gridAutoRows: 'minmax(250px, auto)',
        padding: '0 10%'
    }
}

export default Home