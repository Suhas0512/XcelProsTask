import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
function App(props){
  return(
    <BrowserRouter>
      <div>
      <Route path="/dashboard" component={Home} ></Route>
        <Route path="/" component={Login} exact={true}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/facebook" component={Home} ></Route>
      </div>
    </BrowserRouter>
    
  )
}
export default App;