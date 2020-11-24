import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import loginForm from './testcode-components/loginForm';

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact render={()=> <Redirect to="/wine-store/home" />} />
          <Route path="/wine-store/home" exact render={({history})=><HomePage push={history.push} />} /> */}

          <Route path="/testPath" exact component={loginForm} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
