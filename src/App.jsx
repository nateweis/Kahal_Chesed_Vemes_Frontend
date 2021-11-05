import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Template from './components/Template/Template';
import Home from './components/Home/HomePage';
import Events from './components/Events/EventPage';
import Admin from './components/Admin/AdminLanding';

// Test Compenents 
import LoginForm from './testcode-components/loginForm';
import audioPlayer from './testcode-components/audioPlayer'

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Route path="/pages" render={({history})=> <Template history={history} />} />
        <Route path="/pages/admin" exact render={({history})=> <Admin history={history} />}  />
        <Switch>
          {/* <Route path="/" exact render={()=> <Redirect to="/wine-store/home" />} />
          <Route path="/wine-store/home" exact render={({history})=><HomePage push={history.push} />} /> */}

          <Route path="/" exact render={()=> <Redirect to="/pages/home" />} />
          <Route path="/login" exact render={({history})=> <LoginForm history={history} />}  />

          <Route path="/pages/home" exact component={Home} />

          <Route path="/pages/events" exact component={Events} />

          <Route path="/testPath2" exact component={audioPlayer} />

          <Route render={()=>{return (<div>404 page not found</div>)}} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
