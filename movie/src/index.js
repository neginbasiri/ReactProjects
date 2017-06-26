import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';
import Movies from './components/movies';
import UpComing from './components/upcoming';
import Info from './components/info';
import Setting from './components/setting';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <App>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/movies" component={Movies} />
            <Route path="/upcoming" component={UpComing} />
            <Route path="/info" component={Info} />
            <Route path="/setting" component={Setting} />
          </Switch>
        </App>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
