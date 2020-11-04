import React from 'react';
import logo from './logo.svg';
//pages:
import Home from './pages/Home';
import Oferts from './pages/Oferts';
import Prevents from './pages/Prevents';
import Games from './pages/Games'
import Pavos from './pages/Pavos';
import Plus from './pages/Plus'
import Register from './pages/Register'
//
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './components/layout'
function App(){
    return(
<BrowserRouter>
    <Layout>
        <Switch>
<Route exact path = "/" component={Home} />
<Route exact path = "/Promos" component={Oferts}/>
<Route exact path = "/Prevents" component={Prevents} />
<Route exact path = "/Games" component={Games} />
<Route exact path = "/Pavos" component={Pavos}/>
<Route exact path = "/Plus" component={Plus}/>
<Route exact path = "/Register" component={Register}/>
        </Switch>
    </Layout>
</BrowserRouter>
    )
  
}

export default App;
