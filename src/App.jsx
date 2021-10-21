import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Nav from './components/Nav';

// Test Compenents 
import loginForm from './testcode-components/loginForm';
import audioPlayer from './testcode-components/audioPlayer'

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Route path="/pages" component={Nav} />
        <Switch>
          {/* <Route path="/" exact render={()=> <Redirect to="/wine-store/home" />} />
          <Route path="/wine-store/home" exact render={({history})=><HomePage push={history.push} />} /> */}

          <Route path="/pages/testPath" exact component={loginForm} />
          <Route path="/testPath2" exact component={audioPlayer} />

          <Route render={()=>{return (<div>404 page not found</div>)}} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
