import React, { Component } from 'react';
import BGA from '../components/BGA/Bga';
import {BrowserRouter, Route } from 'react-router-dom';
import Empty from '../components/Empty';

export default class Router extends Component {
    render() {
        return (
            <div>
             
               
                  <Route exact path="/" render={() => <BGA />} />
                  <Route exact path="/BGA" render={() => <BGA />} />
                  <Route exact path="/empty" render={() => <Empty />} />
                
             
            </div>
        )
    }
}
