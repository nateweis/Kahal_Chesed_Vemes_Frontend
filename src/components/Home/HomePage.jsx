import React, {Component} from 'react';

import HomeSlide from './HomeSlide';
import Publishings from './Publishings';
import UpcomingEvents from './UpcomingEvents';
import Zmainim from './Zmanim';

class Home extends Component{

    render(){
        return(
            <>  
                <HomeSlide />
                <Publishings /> 
                <UpcomingEvents />
                <Zmainim />
            </>
        )
    }
}

export default Home