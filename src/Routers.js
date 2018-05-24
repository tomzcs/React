import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import {Route,Switch} from 'react-router'

class Routers extends Component{

    render(){
      return(
        <div>
          <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/content' component={Content} />
            <Route path='/footer' component={Footer} />
          </Switch>
        </div>
      )
    }
  }
  export default Routers;