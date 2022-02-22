import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Auth from './modules/Auth';

import Home from './pages/Home';

const App = () => {
  return(
    <>
      <Home />
    </>
  )
}

export default App;

{/* <BrowserRouter>
<Route path="/pages" render={({history})=> <Template history={history} />} />
<Route path="/pages/admin"  render={({history})=> (Auth.getToken()? <Admin history={history} /> : <Redirect to="/pages/home" />)}  />
<Switch>
  {/* <Route path="/" exact render={()=> <Redirect to="/wine-store/home" />} />
  <Route path="/wine-store/home" exact render={({history})=><HomePage push={history.push} />} /> */}

//   <Route path="/" exact render={()=> <Redirect to="/pages/home" />} />
//   <Route path="/login" exact render={({history})=> <LoginForm history={history} />}  />

//   <Route path="/pages/home" exact component={Home} />

//   <Route path="/pages/events" exact component={Events} />

//   <Route path="/pages/admin/testPath2" exact component={audioPlayer} />

//   <Route render={()=>{return (<div>404 page not found</div>)}} />
// </Switch>
// </BrowserRouter> 
